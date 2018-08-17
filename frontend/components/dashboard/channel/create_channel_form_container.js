import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { createChannel, clearChannelErrors } from '../../../actions/channel_actions';
import CreateChannelForm from './create_channel_form';
//createChannelMembership, channelmembershipserrors

const mSTP = state => {
  return{
    errors: {
      server: state.errors.server,
      channel: state.errors.channel
    },
    serverId: state.ui.server
  }
}

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createChannel: channel => dispatch(createChannel(channel)),
  clearChannelErrors: () => dispatch(clearChannelErrors()),
})

export default withRouter(connect(mSTP, mDTP)(CreateChannelForm));