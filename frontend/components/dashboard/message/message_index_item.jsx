import React from 'react';

class MessageIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = props.message;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.messageEllipses = this.messageEllipses.bind(this);
    this.editMessage = this.editMessage.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.chats.update(this.state);
  }

  handleRemove(e){
    e.preventDefault();
    this.props.chat.delete(this.state);
  }

  messageEllipses(){
    return(
      <div className="edit-message-dropdown">
        <button onClick={this.editMessage}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    )
  }

  editMessage(){

  }



  render(){
    const isAuthor = this.props.author.id === this.props.currentUserId ? true : false;
    const { author, message } = this.props
    return(
      <div className="message-item">
        <img className="message-user-icon" src={`${author.photoUrl}`} alt=""/>
        <p>{message.content}</p>
      </div>
    )
  }
}

export default MessageIndexItem;


//check if user is author, render conditional edit/delete
// <i class="fas fa-ellipsis-v"></i>