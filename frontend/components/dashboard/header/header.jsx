import React from 'react';

class Header extends React.Component {

  render(){
    return (
     <p>{this.props.channel.name}</p> 
    )
  }


}

export default Header;