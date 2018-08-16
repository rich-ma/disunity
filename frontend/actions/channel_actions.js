
import * as ChannelAPIUtil from '../util/channel_api_util';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const REMOVE_CHANNEL_ERRORS = 'REMOVE_CHANNEL_ERRORS';


export const removeChannel = id => ({
  type: REMOVE_CHANNEL,
  id
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const removeChannelErrors = () => ({
  type: REMOVE_CHANNEL_ERRORS
})

export const createChannel = channel => dispatch => {
  return (
    ChannelAPIUtil.createChannel(channel).then(
      channel => dispatch(receiveChannel(channel)),
      err => (dispatch(receiveErrors(err.responseJSON)))
    )
  )
};

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
  .then(channel => dispatch(receiveChannel(channel)), err => (
    dispatch(receiveErrors(err.responseJSON))))
)

export const deleteChannel = id => dispatch => {
  return (ChannelAPIUtil.deleteChannel(id)
    .then(() => {
      return dispatch(removeChannel(id));
    }), err => (
      dispatch(receiveErrors(err.responseJSON)))
  )
};

export const clearChannelErrors = () => dispatch => (
  dispatch(removeChannelErrors())
);
