import React, { Component, Fragment } from "react";

import Button from '@material-ui/core/Button';

export class Flag extends Component{
  render(){
    return(
      <div>
        <h2>Bandera X</h2>
      </div>   //creado con JSX
    );
  }
}

export class IngredientesPrincipales extends Component{

  ingredientesPrincipales = ["Atun", "Mayonesa", "Sardina"];

  costoEstimadoPorIngrediente = [16, 1, 20];

  render(){
    return(
      <Fragment> 
        {
        /*Nos ayuda a agrupar sin tener una etiqueta de divicion en el HTML */
        //comentario de una unica linea, no borrar las llaves
        }
        <ul>
          {this.ingredientesPrincipales.map((ingrediente, index) => ( <li key={index}>{ingrediente}</li>)) }
        </ul>

      </Fragment>
    ); //React.createElement('h4', {}, "Cortes");  //Creado con lo nativo de React
  }
}

class Dish extends Component{
  render(){
    return(
      <div className="dish">
        <h2>{this.props.dish}</h2>
        <h3>Ingredientes principales:</h3>
        <IngredientesPrincipales></IngredientesPrincipales>
        <h4>Costo aprox: {this.props.costo} </h4>
        <Button variant="contained" color="primary">
          Ver más
        </Button>
      </div>
    );
  }
}

export default Dish;