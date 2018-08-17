import * as MessageAPIUtil from '../util/message_api_util';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const REMOVE_MESSAGE_ERRORS = 'REMOVE_MESSAGE_ERRORS';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
})

export const removeMessageErrors = () => ({
  type: REMOVE_MESSAGE_ERRORS
})

export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id
})

export const createMessage = message => dispatch => {
  return (
    MessageAPIUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)),
      err => (dispatch(receiveErrors(err.responseJSON)))
    )
  )
};

export const updateMessage = message => dispatch => (
  MessageAPIUtil.updateMessage(message)
  .then(message => dispatch(receiveMessage(message)), err => (
    dispatch(receiveErrors(err.responseJSON))))
)

export const deleteMessage = id => dispatch => {
  return (MessageAPIUtil.deleteMessage(id)
    .then(() => {
      return dispatch(removeMessage(id));
    }), err => (
      dispatch(receiveErrors(err.responseJSON)))
  )
};

export const clearMessageErrors = () => dispatch => (
  dispatch(removeMessageErrors())
);
