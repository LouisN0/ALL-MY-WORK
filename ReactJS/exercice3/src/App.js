import React, { Component } from 'react';

let date = new Date();
let minutes = date.getMinutes();
let heure = date.getHours();
let jour = date.getDate();
let mois = date.getMonth()
let annee = date.getFullYear()

class App extends Component {
  render() {
    return (
      <h1>{jour}/{mois + 1}/{annee} | {heure}:{minutes}</h1>
    )
  }
}

export default App;
