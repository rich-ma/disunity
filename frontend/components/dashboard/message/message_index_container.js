import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMessages } from '../../../reducers/selector';
import 


const mSTP = ( state, ownProps ) => {
  const channel = state.entities.channels[ownProps.match.params.channelId];
  const currentUser = state.entities.users[state.session.id];
  const messages = getMessages(state, parseInt(ownProps.match.params.channelId));

  return ({
    channel,
    currentUser,
    messages,
    users: state.entities.users,
    loading: state.ui.loading,
  })
};

const mDTP = 