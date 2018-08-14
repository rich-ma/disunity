import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createServer, fetchServers, fetchServer, removeServerErrors } from '../../../actions/server_actions';
import CreateServerForm from './create_server_form.jsx';
import { createServerMembership } from '../../../actions/server_membership_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = state => ({
  errors: state.errors.server,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createServer: formData => dispatch(createServer(formData)),
  removeServerErrors: () => dispatch(removeServerErrors()),
  createServerMembership: serverId => dispatch(createServerMembership(serverId))
});

export default connect(mSTP, mDTP)(CreateServerForm);
