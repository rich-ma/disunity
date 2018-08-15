import * as ChannelAPIUtil from '../util/channel_api_util';


export const removeChannel => id

export const receiveChannel = channel => ({
  type: RECEVE_CHANNEL,
  channel
})

export const receiveErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const createChannel = formData => dispatch => {
  return (
    ChannelAPIUtil.createChannel(formData).then(
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
  dispatch(removeErrors())
);
