import { connect } from 'react-redux';
import JoinServerForm from './join_server_form';
import {
  createServerMembership,
  removeServerMembershipErrors
} from '../../../actions/server_membership_actions';
import {
  fetchServers,
  removeServerErrors
} from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = state => ({
  errors: {
    server: state.errors.server,
    membership: state.errors.serverMembership
  },
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchServers: () => dispatch(fetchServers()),
  removeServerErrors: () => dispatch(removeServerErrors()),
  removeServerMembershipErrors: () =>
  dispatch(removeServerMembershipErrors()),
  createServerMembership: serverId => dispatch(createServerMembership(serverId))
});

export default connect(mSTP, mDTP)(JoinServerForm);
