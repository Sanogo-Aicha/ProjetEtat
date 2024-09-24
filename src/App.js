import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
  state={
    fullname:"GANDHI DJUNA",
    bio:"Gandhi Djuna, dit Gims , anciennement Maître Gims, né le 5 mai 1986 à Kinshasa (RDC), est un auteur-compositeur-interprète et rappeur congolais.",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Ma%C3%AEtre_Gims_Cannes_2016.jpg",
    Boolean:true
  };
  handleClick=()=>this.setState({Boolean:false})
  render(){
    return (
      <>
      <h1>Hello {this.state.Boolean}</h1>
      <button onClick={this.handleClick}> ClickMe</button>
      </>
 
    )
  }
}

export default App;
