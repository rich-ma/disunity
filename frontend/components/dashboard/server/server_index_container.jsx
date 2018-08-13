import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createServer, fetchServers, fetchServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { openModal } from '../../../actions/modal_actions';


const mSTP = (state) => {

  return {
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
    // loading: state.ui.loading.indexLoading
  }
}

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  fetchServer: id => dispatch(fetchServer(id)),
  fetchServers: () => dispatch(fetchServers()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ServerIndex);