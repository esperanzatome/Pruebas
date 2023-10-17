import React, { Component } from "react";
import axios from "axios";


export default class BuscadorDeProductos extends Component {
  constructor() {
    super()
    this.data=[];
    this.productsList=[];
    this.options=[];
  }

  getProductsList() {

    axios
      .get("http://localhost:3300/productosdeSupermercados")
      .then(response => {
        
         this.data= response.data
         this.data.map(product=>{
          this.productsList.push(product.name) })
          return this.productsList
        })
       
        
        console.log(this.productsList)
  }
       
          
  render(){
    this.getProductsList()

  
    return(
      <div>
        
        <form>
    <input type='text'name="buscadorProductos" list="Products"></input>
   
    <input type="submit" value="Buscar"/>
    </form>
    <datalist id="Products">
      {this.productsList.map(i=>{
        this.options.push(<option value={i}></option>)
        return this.options})}
      {this.options.map(i=>{
        return <option value={this.options[i]}></option>
      })
       
    }
      
    </datalist>
    </div>
    )
  }
}
    
  
  


  
