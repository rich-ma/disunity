import { combineReducers } from 'redux';
import modal from './modal_reducer';
import server from './server_ui_reducer';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  modal,
  server,
  loading
});

export default uiReducer;
