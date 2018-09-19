import React from 'react';

class Header extends React.Component {

  render(){
    if(this.props.loading) return null;

    return (
     <p>{this.props.channel.name}</p> 
    )
  }
}

export default Header;