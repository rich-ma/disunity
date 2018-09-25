import { combineReducers } from 'redux';
import modal from './modal_reducer';
import server from './server_ui_reducer';
import loading from './loading_reducer';
import online from './online_reducer';


const uiReducer = combineReducers({
  modal,
  // server,
  loading,
  online,
});

export default uiReducer;
