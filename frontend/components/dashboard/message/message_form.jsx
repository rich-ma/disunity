import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      authorId: props.userId,
      channelId: props.channel.id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.channel !== this.props.channel){
      return {
        content: this.state.content,
        authorId: this.state.authorId,
        channelId: nextProps.channel.id
      }
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