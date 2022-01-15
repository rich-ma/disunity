import * as MessageAPIUtil from '../util/message_api_util';
export const RECEIVE_LIKE = 'RECIEVE_LIKE'

export const receiveLike = like => {
  type: RECEIVE_LIKE,
  like
}

export const createLike = (userId, messageId) => dispatch => {
  return MessageAPIUtil.createLike(userId, messageId)
    .then(like => dispatch(receiveLike(like))),
    err => (dispatch(receiveErrors(err.responseJSON)));
}