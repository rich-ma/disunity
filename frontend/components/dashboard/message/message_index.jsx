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
  }

  




}

export default MessageIndex;