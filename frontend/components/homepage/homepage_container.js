import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';

const mSTP = ({ session, entities, ui}) => ({
    currentUser: entities.users[session.id],
    loading: ui.loading
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect( mSTP, mDTP)(Homepage);
