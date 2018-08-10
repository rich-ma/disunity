import * as ServerAPIUtil from '../util/server_api_util';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

export const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

export const receiveErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers))), err => (
    dispatch(receiveErrors(err.responseJSON)))
);

export const fetchServer = id => dispatch => (
  ServerAPIUtil.fetchServer(id)
    .then(server => dispatch(receiveServer(server))), err => (
    dispatch(receiveErrors(err.responseJSON))), err => (
      dispatch(receiveErrors(err.responseJSON)))
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server))), err => (
    dispatch(receiveErrors(err.responseJSON))), err => (
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
