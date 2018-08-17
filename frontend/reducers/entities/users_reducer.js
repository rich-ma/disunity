import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
} from '../../actions/session_actions';
import { RECEIVE_SERVERS } from '../../actions/server_actions';

const usersReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, {[action.user.id]: action.user});
    case RECEIVE_SERVERS:
      if (action.payload.users)return action.payload.users;
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
