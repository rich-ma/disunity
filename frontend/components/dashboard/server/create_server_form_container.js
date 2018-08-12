import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createServer, fetchServers, fetchServer, removeServerErrors } from '../../../actions/server_actions';
import CreateServerForm from './create_server_form';

const mSTP = state => ({
  errors: state.errors.serverErrors,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createServer: server => dispatch(createServer(server)),
  removeServerErrors: () => dispatch(removeServerErrors()),
});

export default connect(mSTP, mDTP)(CreateServerForm);
