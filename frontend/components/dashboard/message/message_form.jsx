import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      authorId: props.userId,
      channelId: props.channelId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    debugger
    if (nextProps.channelId !== prevState.channelId){
      return {
        content: prevState.content,
        authorId: prevState.authorId,
        channelId: nextProps.channelId
      }
    } else {
      return prevState;
    }
  }


  handleInput(e){
    e.preventDefault();
    this.setState({ content: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.chats.create(this.state);
    this.setState({ content: "" });
  }
  
  render() {
    if (this.props.loading) return null;
    return (
    <form className="message-form" 
      onSubmit={this.handleSubmit}>
      <input 
        type="text" 
        value={this.state.content} 
        placeholder={`Message #${this.props.channel.name}`} 
        onChange={(e) => this.handleInput(e)} 
        autoFocus="true"
      />
    </form>
    )
  }
}

export default MessageForm;