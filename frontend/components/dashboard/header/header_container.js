import { connect } from 'react-redux';
import Header from './header';
const mSTP = (state, ownProps) => ({
  channel: state.entities.channels[parseInt(ownProps.match.params.channelId)]
});

const mDTP = dispatch => ({

});

export default connect(mSTP,mDTP)(Header);