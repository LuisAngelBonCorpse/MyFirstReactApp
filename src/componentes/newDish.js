import React, { Component} from "react";
import {Fab, TextField} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component{
  /* constructor(){
    super();
    this.addDish = this.addDish.bind(this);  //es mejor hacer arrow function en donde se ocupe dish, pero esta es otra opcion para que funcione correctamente
  } */

  newDish = React.createRef();

  addDish = (event) => {
    console.log("Añadiendo receta");
    event.preventDefault();
    console.log(this.newDish.value);
  }

  render(){
    return(
        <form autoComplete="off" onSubmit={this.addDish}>

          {/* 
          console.log(this.newDish.current.value);
          <input ref={this.newDish} /> //esta es otra otra de obtener el valor de un input usando los inputs normales, la que esta puesta con el textfield de React es la funcional actual
          */}
          <TextField
            label = "Receta...."
            type = "text"
            margin = "normal"
            variant =  "outlined"
            inputRef={e => (this.newDish = e)}
          />
          <div className="iconPlus">
            <Fab 
              color = "primary" 
              size = "medium"
              className="dish-form-icon"
              onClick={this.addDish}
            >
              <AddIcon />
            </Fab>
          </div>
        </form>
    );
  }
}

export default NewDish;