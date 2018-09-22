import React from 'react';

class UserListItem extends React.Component {

  render(){
    const { user } = this.props;
    return (
      <div className='user-list-item'>
        <img src={`${user.photoUrl}`} alt=""/>
        <p>{user.username}</p>
      </div>
    )
  }
}
export default UserListItem;