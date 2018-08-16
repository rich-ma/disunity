import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import ChannelIndex from './channel_index';
import { getChannels } from '../../../reducers/selector';
import { createChannel, updateChannel, deleteChannel } from '../../../actions/channel_actions';

const mSTP = (state, ownProps) => {
   const currentServer = state.entities.servers[ownProps.match.params.serverId];
   const currentUser = state.entities.users[state.session.id];
   const channels = currentServer === undefined ? [] : getChannels(state, currentServer.id);
   return ({
    channels,
    currentUser,
    currentServer,
    loading: state.ui.loading
   })
};

const mDTP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  updateChannel: channel => dispatch(updateChannel(channel)),
  deleteChannel: id => dispatch(deleteChannel(id)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ChannelIndex);
