import React from 'react';

class Header extends React.Component {

  render(){
    if(this.props.loading) return null;

    return (
    <div className="dashboard-header">
        <i className="fas fa-hashtag">&nbsp;</i>
        <p>{this.props.channel.name}</p>
      </div>
    )
  }
}

export default Header;