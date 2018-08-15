import * as SMApiUtil from '../util/server_membership_api_util';

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";
export const RECEIVE_MEMBERSHIP_ERRORS = "RECEIVE_MEMBERSHIP_ERRORS";
export const CLEAR_MEMBERSHIP_ERRORS = "CLEAR_MEMBERSHIP_ERRORS";

const receiveMembership = membership => ({
  type: RECEIVE_MEMBERSHIP,
  membership
});

export const removeMembership = membership => ({
  type: REMOVE_MEMBERSHIP,
  membership
});

const receiveMembershipErrors = errors => ({
  type: RECEIVE_MEMBERSHIP_ERRORS,
  errors
});

const clearMembershipErrors = () => ({
  type: CLEAR_MEMBERSHIP_ERRORS
});

export const createServerMembership = serverId => dispatch => (
  SMApiUtil.createMembership(serverId)
  .then(membership => dispatch(receiveMembership(membership)), err => 
  dispatch(receiveMembershipErrors(err.responseJSON))
  )
);

export const deleteServerMembership = membership => dispatch => (
  SMApiUtil.deleteMembership(membership.id)
  .then(() => dispatch(removeMembership(membership)), err => 
  dispatch(receiveMembershipErrors(err))
  )
);

export const removeServerMembershipErrors = () => dispatch => (
  dispatch(clearMembershipErrors())
);
