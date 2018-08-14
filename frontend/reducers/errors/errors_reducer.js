import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import server from './server_errors_reducer';
import serverMembership from './server_memberships_errors';

export default combineReducers({
  session,
  server,
  serverMembership,
});
