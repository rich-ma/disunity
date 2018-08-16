import merge from 'lodash/merge';
import {
  RECEIVE_SERVER
} from '../../actions/server_actions';

const serverUIReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER:
      return action.server.id;
    default:
      return state;
  }
}

export default serverUIReducer;