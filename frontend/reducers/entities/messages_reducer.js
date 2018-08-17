import merge from 'lodash/merge';
import { 
  REMOVE_MESSAGES,
  RECEIVE_MESSAGES,            
} from '../../actions/message_actions';
import {
  RECEIVE_SERVERS
} from '../../actions/server_actions';
import {
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const messagesReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVERS:
      if (action.payload.messages === undefined) return newState;
      return action.payload.messages;
    case REMOVE_MESSAGES:
      delete newState[action.messageId];
      return newState;
    case RECEIVE_MESSAGES:
      return merge(newState, {[action.message.id]: action.message});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default messagesReducer;