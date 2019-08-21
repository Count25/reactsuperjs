import React from 'react';

import './App.css';

//in questo caso creo la funzione Hello world
/* function Helloworld (props) {
  console.log(props)
  return ( */

   // In questo caso li richiamo con la proprieta mytext, e subtitle
    //( si possono mettere quante proprietà si vogliono)
     //cosi posso richiamare la funzione con delle modifiche*/
/*   <div id= "hello"> 
    <h3>{props.subtitle}</h3>
    {props.mytext}
    </div>
  )

}  */

 class Helloworld extends React.Component {

  state= {
    show:true
  }
/* funzione freccia */
/* In questo modo funziona come un on /off */
  toggleShow =()=> {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id= "hello"> 
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
      {/*  Creazione pulsante  */}
        <button onClick= {this.toggleShow}>Toggle Show </button>
        </div>
    )
    /* Nel caso la richiesta sia false, ritorna questo */
      }
      else {
        return <h1> 
          There are not elements
          <button onClick= {this.toggleShow}>
            Toggle Show
          </button>
          </h1>

      }
    }
  }






//funzione freccia

/* const App = () => <div> This is my component: <Helloworld/> </div> */

//Costruzione attraverso una classe che ereda con extends
/* class App extends React.Component { 
  render() {
    return <div> This is my component <Helloworld/></div>
  }

}  */
 //Qui sto richiamando la mia funzione, la quale può essere richiamata quante volte vogliamo! 
 //inoltre con le proprieta ci restituisce oggetti diversi
function App() {
  return (
    <div>
       This is my component: 
       <Helloworld mytext= "Ravenna" subtitle ="waaa"/> 
       <Helloworld mytext="Hello Bat" subtitle= "jambalaya"/> 
       <Helloworld mytext= "Welcome to the batfamily"/> </div>
  );
}

export default App;
/*Qui stiamo richiamando la funzione usando una classe */
 

