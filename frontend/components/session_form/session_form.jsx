import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemo(e){
    e.preventDefault();
    const demoUser = { email: "dweb", password: 'starwars' };
    this.props.demoLogin(demoUser);
  }

  render() {
    const welcome = this.props.formType === 'login' ? (
      <div className="session-form-title">
        <h2>Welcome back!</h2>
        <p>We're so excited to see you again!</p>
      </div>
    ) : (
      <div className="session-form-title">
        <h2>Create an account</h2>
      </div>
    ); //end welcome
    
    const usernameField = this.props.formType === 'login' ? null : (
      <label>USERNAME
        <input type="text" value={this.state.username}
          onChange={this.update('username')}
          className="session-input"/>
      </label>
    ); //end username

    return (
      <div className="session-main">
        <div className="session-logo">
        <i className="fab fa-discord" alt="disunity logo"></i>
        &nbsp;
          <p>DisUnity</p>
        </div>
        <ReactCSSTransitionGroup transitionName="session-form"
          transitionAppear={true}
          transitionAppearTimeout={100}
          transitionEnter={true}
          transitionLeave={false}
          >
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className="session-form-box">
              {welcome}

              <div className="session-errors">
              {this.renderErrors()}
              </div>
                <label>EMAIL
                  <input type="text" value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input" />
                </label>
    
                {usernameField}

                <label>PASSWORD
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                  />
                </label>

                <label>
                <input className="session-submit" type="submit" value={this.props.formType === 'login' ? 'login' : 'continue'} />
                </label>
                
            </form>
            <div className="session-redirect">
            {(this.props.formType === 'login' ? "Need an account? " : null)}{this.props.navLink}
            <Link to='#' onClick={(e) => this.handleDemo(e)}>Demo Login</Link>
            </div>
          </div>
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(SessionForm);
