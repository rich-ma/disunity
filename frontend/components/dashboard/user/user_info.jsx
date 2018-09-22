import React from 'react';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: props.currentUser,
      photoFile: null
    }
  }

  render(){
    if (this.props.loading) return null;
    const {currentUser, openModal } = this.props;
    return(
      <div className='user-info-container'>
        <div className='user-info-display'>
          <img src={`${currentUser.photoUrl}`} alt=""/>
          <div>
            <p className='user-info-name'>{currentUser.username}</p>
            <p className='user-info-salt'>#{currentUser.usernameSalt}</p>
          </div>
        </div>
      <div className="edit-user-cog"
        onClick={() => openModal('editUser')}><i className="fas fa-cog"></i></div>
      </div>
    )
  }
}

export default UserInfo;

