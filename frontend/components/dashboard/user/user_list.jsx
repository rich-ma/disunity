import React from 'react';
import UserListItem from './user_list_item';

class UserList extends React.Component {
  

  createSocket() {
    let that = this;

    let cable = ActionCable.createConsumer(`wss://${location.host}/cable`);
    that.appearances = cable.subscriptions.create("AppearanceChannel", {
      connected: function () {
        this.perform('create', {
          userId: that.props.currentUser.id
        });
      },
      disconnected: () => { },
      received: data => {
        if (data.type === "login") {
          let onlineUsers = [...that.state.onlineUsers];
          onlineUsers.push(data.userId);
          that.props.userLoggedIn(data.userId);
          that.setState({ onlineUsers });
        } else {
          let offlineIndex = that.state.onlineUsers.indexOf(data.userId);
          let newOnlineUsers = that.state.onlineUsers.slice(0, offlineIndex).concat(that.state.onlineUsers.slice(offlineIndex + 1));
          that.props.userLoggedOut(data.userId);
          that.setState({ onlineUsers: newOnlineUsers });
        }
      },
      destroy: function () {
        this.perform('destroy', {
          userId: that.props.currentUser.id
        })
      }
    }
    )
  }

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