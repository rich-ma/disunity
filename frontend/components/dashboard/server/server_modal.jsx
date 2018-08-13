import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CreateServerFormContainer from './create_server_form_container';
// import JoinServerFormContainer from './join_server_form_container';

class NewServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  updateContent(type) {
    this.setState({ type })
  }

  render() {
    let content;
    if (this.state.type === "create") {
      content = createServer();
    } else if (this.state.type === "join") {
      content = joinServer();
    } else {
      content = (
        <div>
          <h1>Oh, another server huh?</h1>
          <div className="new-server-container">
            <div className="new-server-choose server-create">
              <h2>Create</h2>
              <p>Create a new server and invite your friends. It's free!</p>
              <button onClick={() => this.updateContent('create')}>
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

const createServer = () => (
  <div className='animated fadeIn'>
    <CreateServerFormContainer />
  </div>
)

// const joinServer = () => (
  // < div className = 'animated fadeIn' >
  //   <JoinServerFormContainer />
  // </div >
// )

export default NewServer;
