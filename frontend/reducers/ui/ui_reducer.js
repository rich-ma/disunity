import { combineReducers } from 'redux';
import modal from './modal_reducer';
import server from './server_ui_reducer';

const uiReducer = combineReducers({
  modal,
  server
});

export default uiReducer;
