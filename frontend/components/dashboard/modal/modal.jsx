import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route, withRouter } from 'react-router-dom';
import NewServerContainer from '../../dashboard/server/server_modal';
import CreateChannelFormContainer from '../../dashboard/channel/create_channel_form_container';
import EditUserFormContainer from '../../dashboard/user/edit_user_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;
  let component;
  switch (modal) {
    case 'newServer':
      component = <NewServerContainer />;
      break;
    case 'newChannel':
      component = <CreateChannelFormContainer />;
      break;
    case 'editUser':
      component = <EditUserFormContainer />;
      break;
    // case 'userInfo':
    //   component = <UserInfoContainer />
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}> 
      <div className="modal-child animated fadeIn" 
      onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
} 

const mapStateToProps = (state, ownProps) => {
  return {
  modal: state.ui.modal
  }
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
