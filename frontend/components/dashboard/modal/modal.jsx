import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route } from 'react-router-dom';
import NewServerContainer from '../../dashboard/server/server_modal';
import CreateChannelFormContainer from '../../dashboard/channel/create_channel_form_container';


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
      break;
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
