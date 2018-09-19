import { connect } from 'react-redux';
import Header from './header';
const mSTP = (state, ownProps) => ({
  channel: state.entities.channels[parseInt(ownProps.match.params.channelId)],
  loading: state.ui.loading
});

const mDTP = dispatch => ({

});

export default connect(mSTP,mDTP)(Header);