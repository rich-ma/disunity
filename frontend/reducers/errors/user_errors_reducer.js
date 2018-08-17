import merge from 'lodash/merge';
import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from '../../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_USER_ERRORS:
      return [];
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default userErrorsReducer;