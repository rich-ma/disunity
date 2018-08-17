import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import { updateLoading } from '../../../actions/loading_actions';
import UserInfo from './user_info.jsx';
import { updateUser, clearUserErrors } from '../../../actions/user_actions';


const mSTP = ( state, ownProps) => {
  return({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
  })
}

const mDTP = dispatch => ({
  updateLoading: (value) => dispatch(updateLoading(value)),
  openModal: modal => dispatch(openModal(modal)),
  updateUser: user => dispatch(updateUser(user)),
  clearUserErrors: () => dispatch(clearUserErrors())
})

export default connect(mSTP, mDTP)(UserInfo);