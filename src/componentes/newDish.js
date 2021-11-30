import React, { Component, Fragment } from "react";
import {Fab, TextField} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component{
  render(){
    return(
      <Fragment>
        <form autoComplete="off">
          <TextField
            label = "Receta...."
            type = "text"
            margin = "normal"
            variant =  "outlined"
          />
          <Fab color = "primary" size = "medium" className="dish-form-icon">
            <AddIcon />
          </Fab>
        </form>
      </Fragment>
    );
  }
}

export default NewDish;