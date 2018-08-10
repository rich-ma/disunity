import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer';

const entitiesReducer = combineReducers({
  users,
  servers,
});

export default entitiesReducer;