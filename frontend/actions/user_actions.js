import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const updateUser = formData => dispatch => {
  debugger;
  return (
  UserAPIUtil.updateUser(formData)
  .then(user => dispatch(receiveUser(user)), err => (
    dispatch(receiveErrors(err.responseJSON))))
)
}

export const clearUserErrors = () => dispatch => (
  dispatch(clearErrors())
)