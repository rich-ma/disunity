import {
  RECEIVE_SERVER_ERRORS,
  RECEIVE_SERVER,
  REMOVE_SERVER_ERRORS
} from '../../actions/server_actions';

const ServerErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
 
      if (action.errors === undefined) return [];
      return action.errors;
    case RECEIVE_SERVER:
      return [];
    case REMOVE_SERVER_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ServerErrorsReducer;