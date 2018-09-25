import React from 'react';
import MessageForm from './message_form';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      channel: this.props.channel
    };
    this.createSocket();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  createSocket() {
    let that = this;

    let cable = ActionCable.createConsumer();
    that.chats = cable.subscriptions.create({
      channel: 'ChatChannel',
      channel_id: that.props.match.params.channelId
    }, {
        connected: () => { },
        received: data => {
          if (data.type === "destroy") {
            that.props.removeMessage(data.message.id);
          } else {
            that.props.receiveMessage(data.message);
          }
        },
        create: function(message) {
          this.perform('create', {
            content: message.content,
            channelId: message.channelId,
            authorId: message.authorId
          });
        },
        update: function(message) {
          this.perform('update', {
            id: message.id,
            content: message.content,
            channelId: message.channelId,
            authorId: message.authorId
          })
        },
        delete: function(message) {
          this.perform('destroy', {
            id: message.id
          })
        }
      });
  }

  scrollToBottom() {
    const messages = document.getElementById("message-end");
    if(messages){
      messages.scrollIntoView();
    }
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      messages: props.messages,
      channel: props.channel
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.props.fetchServers();
      if (this.chats) {
        this.chats.unsubscribe();
      }
      this.createSocket();
      this.scrollToBottom();
      return;
    }

    for (let i = 0; i < prevProps.messages.length || i < this.props.messages.length; i++) {
      if (prevProps.messages[i].id !== this.props.messages[i].id) {
        this.props.fetchServers();
        if (this.chats) {
          this.chats.unsubscribe()
        }
        this.createSocket();
        break;
      }
    }
    this.scrollToBottom();
  }

  render() {
    if (this.props.loading) return null;
    const { channel, users, currentUserId, loading } = this.props;
    const { messages } = this.state;
    let prevAuth = null;

    return <div className="message-container">
        <div className="message-index">
          {messages.length > 0 ?
          <ul className="message-index-log">
            {messages.map(message => {
              return <MessageIndexItem message={message} key={message.id} author={users[message.authorId]} currentUserId={currentUserId} chats={this.chats} />;
            })}
          </ul>
          :
          <div className='no-messages'>
          </div>
          }
          <div id='message-end'/>

        </div>
        <MessageForm loading={loading} userId={currentUserId} chats={this.chats} channel={channel} channelId={parseInt(this.props.match.params.channelId)} />
      </div>;
  }
};

export default MessageIndex;