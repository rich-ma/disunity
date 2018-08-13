import * as ServerAPIUtil from '../util/server_api_util';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const REMOVE_SERVER_ERRORS = 'REMOVE_SERVER_ERRORS'

export const receiveServers = payload => ({
  type: RECEIVE_SERVERS,
  payload
});

export const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

export const receiveErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const removeServerErrors = () => ({
  type: REMOVE_SERVER_ERRORS
});

export const removeServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId
});

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers))), err => (
    dispatch(receiveErrors(err.responseJSON)))
);

export const fetchServer = id => dispatch => (
  ServerAPIUtil.fetchServer(id)
    .then(server => dispatch(receiveServer(server))), err => (
    dispatch(receiveErrors(err.responseJSON)))
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server))), err => (
    dispatch(receiveErrors(err.responseJSON)))
);

export const updateServer = server => dispatch => (
  ServerAPIUtil.updateServer(server)
  .then(server => dispatch(receiveerver(server))), err => (
    dispatch(receiveErrors(err.responseJSON)))
)

export const deleteServer = id => dispatch => (
  ServerAPIUtil.deleteServer(id)
  .then(id => dispatch(removeServer(id))), err => (
    dispatch(receiveErrors(err.responseJSON)))
)

export const clearServerErrors = () => dispatch => (
  dispatch(removeErrors())
);
