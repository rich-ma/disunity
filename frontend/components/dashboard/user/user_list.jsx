import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {

  render(){
    if(this.props.loading) return null;
    return (
      <ul className='user-list'>
        {this.props.users.map(user => (
          <UserListItem
          user={user}
          key={user.id}
          />
        ))}
      </ul>
    )
  }
}

export default UserList;