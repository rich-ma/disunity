import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';
import serverMemberships from './server_memberships_reducer';
import channels from './channels_reducer';

const entitiesReducer = combineReducers({
  users,
  servers,
  serverMemberships,
  channels,
});

export default entitiesReducer;