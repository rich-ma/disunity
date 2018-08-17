import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { deleteServer, fetchServers, updateServer, removeServerErrors, fetchServer } from '../../../actions/server_actions';
import ServerHeader from './server_header';
import { removeServerMembershipErrors, deleteServerMembership } from '../../../actions/server_membership_actions';
import { getMembership } from '../../../reducers/selector';
import { updateLoading } from '../../../actions/loading_actions';

const mSTP = (state, ownProps) => {
  const currentServer = state.entities.servers[ownProps.match.params.serverId];
  const currentUser = state.entities.users[state.session.id];
 
  return ({
    errors: {
      server: state.errors.server,
      membership: state.errors.serverMembership
    },
    loading: state.ui.loading,
    currentServer,
    currentUser,
    serverMembership: getMembership(state, currentUser.id, parseInt(ownProps.match.params.serverId))
  });
}

const mDTP = dispatch => ({
  updateLoading: (value) => dispatch(updateLoading(value)),
  deleteServer: id => dispatch(deleteServer(id)),
  updateServer: id => dispatch(updateServer(id)),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (id) => dispatch(fetchServer(id)),
  deleteServerMembership: id => dispatch(deleteServerMembership(id)),
  removeServerErrors: () => dispatch(removeServerErrors()),
  removeServerMembershipErrors: () => 
  dispatch(removeServerMembershipErrors()),
  openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(mSTP, mDTP)(ServerHeader));
