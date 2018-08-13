import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route } from 'react-router-dom';

import ServerModal from '../server/server_modal';
// import UserInfoFormContainer from '../user_info/user_info_form_container';
// import ServerInfoFormContainer from '../server/server_info_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;
  let component;
  switch (modal) {
    case 'newServer':
      component = <ServerModal />;
      break;
    // case 'userInfo':
    //   component = <UserInfoFormContainer />;
    //   break;
    // case 'serverInfo':
    //   component = <Route path="/channels/:serverId" component={ServerInfoFormContainer} />;
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

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
