import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { updateLoading } from '../../../actions/loading_actions';
import { updateUser, clearUserErrors } from '../../../actions/user_actions';
import EditUserForm from './edit_user_form';

const mSTP = (state, ownProps) => {


  return ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
  })
}

const mDTP = dispatch => ({
  updateLoading: (value) => dispatch(updateLoading(value)),
  closeModal: () => dispatch(closeModal()),
  updateUser: user => dispatch(updateUser(user)),
  clearUserErrors: () => dispatch(clearUserErrors())
})

export default connect(mSTP, mDTP)(EditUserForm);