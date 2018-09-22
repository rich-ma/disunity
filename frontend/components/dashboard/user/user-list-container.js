import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { updateLoading } from '../../../actions/loading_actions';
import UserList from './user_list';
import { getUsers } from '../../../reducers/selector';


const mSTP = (state, ownProps) => {
  const serverId = parseInt(ownProps.location.pathname.split('/')[2]);
  return {
    users: getUsers(state, serverId),
    loading: state.ui.loading,
  }
}

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP,mDTP)(UserList));

