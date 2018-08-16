import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import ChannelIndex from './channel_index';
import { getChannels } from '../../../reducers/selector';
import { createChannel, updateChannel, deleteChannel } from '../../../actions/channel_actions';

const mSTP = (state, ownProps) => {
   const currentServer = state.entities.servers[ownProps.match.params.serverId];
   const currentUser = state.entities.users[state.session.id];

   return ({
    channels: getChannels(state, currentServer.id),
    currentUser,
    currentServer,
   })
};

const mDTP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
  updateChannel: channel => dispatch(updateChannel(channel)),
  deleteChannel: id => dispatch(deleteChannel(id))
})

export default connect(mSTP, mDTP)(ChannelIndex);
