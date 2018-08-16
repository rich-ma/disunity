import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import server from './server_errors_reducer';
import serverMembership from './server_memberships_errors';
import channel from './channel_errors_reducer';

export default combineReducers({
  session,
  server,
  serverMembership,
  channel,
});
