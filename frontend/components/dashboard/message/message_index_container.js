import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMessages } from '../../../reducers/selector';
import { receiveMessage, removeMessage } from '../../../actions/message_actions';
import { fetchServers } from '../../../actions/server_actions';
import MessageIndex from './message_index';

const mSTP = ( state, ownProps ) => {
  const channel = state.entities.channels[ownProps.match.params.channelId];
  const currentUser = state.entities.users[state.session.id];
  const messages = getMessages(state, parseInt(ownProps.match.params.channelId));

  return ({
    channel,
    currentUserId: state.session.id,
    messages,
    users: state.entities.users,
    loading: state.ui.loading,
  })
};

const mDTP = dispatch => ({
  receiveMessage: messages => dispatch(receiveMessage(message)),
  removeMessage: id => dispatch(removeMessage(id)),
  fetchServers: () => dispatch(fetchServers()),
})

export default connect(mSTP, mDTP)(MessageIndex);