import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createServer, fetchServers, fetchServer, removeServerErrors } from '../../../actions/server_actions';
import CreateServerForm from './create_server_form.jsx';
import { createServerMembership, removeServerMembershipErrors } from '../../../actions/server_membership_actions';
import { closeModal } from '../../../actions/modal_actions';
import { updateLoading } from '../../../actions/loading_actions';

const mSTP = state => ({
  errors: {
    server: state.errors.server,
    membership: state.errors.serverMembership
  },
  currentUser: state.entities.users[state.session.id],
  loading: state.ui.loading,
});

const mDTP = dispatch => ({
  updateLoading: value => dispatch(updateLoading(value)),
  closeModal: () => dispatch(closeModal()),
  createServer: formData => dispatch(createServer(formData)),
  removeServerErrors: () => dispatch(removeServerErrors()),
  removeServerMembershipErrors: () => 
  dispatch(removeServerMembershipErrors()),
  createServerMembership: serverId => dispatch(createServerMembership(serverId))
});

export default connect(mSTP, mDTP)(CreateServerForm);
