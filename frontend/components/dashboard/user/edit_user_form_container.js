import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import { updateLoading } from '../../../actions/loading_actions';
import { updateUser, clearUserErrors } from '../../../actions/user_actions';
import EditUserForm from './edit_user_form';
import { logout } from '../../../actions/session_actions';

const mSTP = (state, ownProps) => {

  return ({
    errors: {
      server: state.errors.server,
      user: state.errors.user
    },
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
  })
}

const mDTP = dispatch => ({
  updateLoading: (value) => dispatch(updateLoading(value)),
  closeModal: () => dispatch(closeModal()),
  updateUser: user => dispatch(updateUser(user)),
  clearUserErrors: () => dispatch(clearUserErrors()),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(EditUserForm));