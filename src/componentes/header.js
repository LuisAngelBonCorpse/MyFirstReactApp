import React, { Component } from "react";

import NewDish from "./newDish";

class Header extends Component{
  render(){
    return(
      <div>
        <h1>Mis recetas favoritas.</h1>
        <NewDish />
      </div>
    )
  }
}

export default Header;