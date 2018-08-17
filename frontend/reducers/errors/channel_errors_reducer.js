import merge from 'lodash/merge';
import {
  REMOVE_CHANNEL_ERRORS,
  RECEIVE_CHANNEL_ERRORS
} from '../../actions/channel_actions';

const channelErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CHANNEL_ERRORS:
      return [];
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default channelErrorsReducer;