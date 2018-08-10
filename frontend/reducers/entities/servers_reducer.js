import merge from 'lodash/merge';

import { RECEIVE_SERVER, REMOVE_SERVER,
  RECEIVE_SERVERS } from '../../actions/server_actions';

const serversReducer = (state = {}, action) => {
  const newState = merge({}, state)
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER:
      return merge(newState, {[action.server.id]: action.server});
    case RECEIVE_SERVERS:
      return action.servers;
    case REMOVE_SERVER:
      delete newState([action.serverId]);
      return newState;
    default:
      return state;
  }
}

export default serversReducer;