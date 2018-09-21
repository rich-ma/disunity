import merge from 'lodash/merge';
import {
  REMOVE_MESSAGE_ERRORS,
  RECEIVE_MESSAGE_ERRORS
} from '../../actions/message_actions';

const messageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_MESSAGE_ERRORS:
      return [];
    case RECEIVE_MESSAGE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default messageErrorsReducer;