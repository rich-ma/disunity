import React from 'react';
import CreateServerFormContainer from './create_server_form_container';
import JoinServerFormContainer from './join_server_form_container';

class NewServerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  updateContent(type) {
    this.setState({ type })
  }

  createServer(){
    return(
    <div className='animated fadeIn'>
      <CreateServerFormContainer />
    </div>
    )
  }

  joinServer(){
    return (
    < div className='animated fadeIn' >
      <JoinServerFormContainer />
    </div >
    )
  }

  render() {
    let content;
    if (this.state.type === "create") {
      content = this.createServer();
    } else if (this.state.type === "join") {
      content = this.joinServer();
    } else {
      content = (
        <div>
          <h1>Oh, another server huh?</h1>
          <div className="new-server-container">
            <div onClick={() => this.updateContent('create')} className="new-server-choose server-create">
              <h2>Create</h2>
              <p>Create a new server and invite your friends. It's free!</p>
              <button type='submit'>
              Create a Server</button>
            </div>
            <div className="new-server-choose server-join"
              onClick={() => this.updateContent('join')}>
              <h2>Join</h2>
              <p>Enter a server name and join your friend's server.</p>
              <button type="submit">Join a Server</button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="new-server-container">
        {content}
      </div>
    )
  }
};

export default NewServerContainer;
