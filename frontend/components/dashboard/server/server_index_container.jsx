import { connect } from 'react-redux';
import { createServer, fetchServers, fetchServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { openModal } from '../../../actions/modal_actions';


const mSTP = (state) => {
  return {
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  fetchServers: () => dispatch(fetchServers()),
  openModal: modal => dispatch(openModal(modal))
}); 

export default connect(mSTP, mDTP)(ServerIndex);