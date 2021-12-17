import logo from './logo.svg';
import { Provider } from "react-redux";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);



    this.state = {
      //change these defaults to an account that has more info
      date: "(Not logged in)",
      dateSignature:
        "0xda48e9e6024d16bd4268c13afce15a17574ad50f8280f57f27afe84a80bec0a4084df72842055a3c3bd5489c3066060717d9242764cbd7b47fd30dd677034b401b",
      verifiedAddress: "(Not logged in)"
    };
  }


  render() {
    return (

      <Login/>

    );
  }
}

export default App;
