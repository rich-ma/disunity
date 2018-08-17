import React, { Component } from 'react';
class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.currentUser.username,
      // email: props.currentUser.email,
      photoFile: null,
      photoUrl: props.currentUser.photoUrl
    };

    this.updateName = this.updateName.bind(this);
    // this.updateEmail = this.updateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.clearUserErrors();
  }

  updateName(e) {
    e.preventDefault();
    this.setState({ username: e.currentTarget.value });
  }
  // updateEmail(e) {
  //   e.preventDefault();
  //   this.setState({ email: e.currentTarget.value });
  // }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('id', this.props.currentUser.id);
    // formData.append('user[email]', this.state.email);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    this.props.updateUser(formData)
      .then(()=>this.props.closeModal())
  }


  handleFile(e) {
    e.preventDefault()
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ PhotoUrl: "" , PhotoFile: null });
    }
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout()
      .then(() => 
        this.props.history.push(`/`))
        .then(()=>this.props.closeModal());
  }

  render(){

    return (
      <div className='edit-user-form-container'>
        <div className='edit-user-info'>
          <h1>My Account</h1>
          <div className='edit-user-photo'>
            <label className="user-photo-input-label"
              htmlFor="user-photo-input">
              <img src={this.state.photoUrl}/>
              <input
                type="file"
                id="user-photo-input"
                onChange={this.handleFile}
                accept="image/*"/>
            </label>
          </div>
        </div>

        <div className="edit-user-text">
          <div className='edit-user-errors'>
            <ul>
              {this.props.errors.server.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <ul>
              {this.props.errors.user.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <p>USERNAME</p>
          <input
            type="text"
            autoFocus="true"
            className='edit-user-input'
            onChange={(e) => this.updateName(e)}
            value={this.state.username} />

            <p>EMAIL</p>
            <p className='user-email'>{this.props.currentUser.email}</p>
            <div className='edit-user-buttons'>
            <button onClick={e=>this.handleLogout(e)} className='logout'>Logout</button>
            <button className="edit-user-submit" onClick={(e)=>this.handleSubmit(e)}>Save</button>

            </div>
        </div>
      </div>
    )
  }
}

export default EditUserForm;