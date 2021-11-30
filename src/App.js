import  Header  from "./componentes/header";
import  Dish/* ,  * as D */ from "./componentes/dish"; // se renombran componentes similares, podrian ser variaciones del mismo


import React, { Component } from "react";
import './estilos/App.css';
/* import "./estilos/dish.css"; de esta manera se importan elementos que aplican para todo el sitio */

class App extends Component {
  costos = [50,100,20,200];
  dishes = ["Ensalada rusa", "Solo la puntita", "Rapado", "Rastas"];
  render(){
    return (  //este retorno solo aplica para una sola etiqueta (que puede tener mas dentro, pero solo una a ese mismo nivel)
      <div className="App">
        <Header></Header>
        {/* <p>Necesito un {this.dish} </p> 
        <ul>
          {
            this.dishes.map(dish => (<li> {dish} </li>))
          }
        </ul>
        */}
        <Dish dish={this.dishes[0]} costo={this.costos[0]} ></Dish>
      </div>
    );
  }
}

export default App;
