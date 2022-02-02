import React, {Component } from 'react';

let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'hsl(217, 54%, 11%)'
body.style.margin = '0'

const card = {
  width: "21vw",
  height: "72vh",
  backgroundColor: 'hsl(216, 50%, 16%)',
  borderRadius: "25px",
  padding: "1%",
}
const styleBody = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw"
}

const textBlanc = {
  color: "white"
}

const img = {
  background: "url(./img/image-equilibrium.jpg)",
  backgroundSize: "cover",
  width: "100%",
  height: "40vh",
  borderRadius: "25px",
  marginTop: "0px"
}
const jules = {
  width: "30px",
  height: "30px",
  backgroundSize: "cover",
  borderRadius: "50px",
}
const cont1 = {
  display: "flex",
  justifyContent: "center",
}
const cont11 ={
  display: "flex",
  justifyContent: "start",
  width: "50%",
  marginTop: "30px"
}
const m0 = {
  margin: "0",
  marginLeft: "10px",
  marginBottom: "50px",
  color: "white",
}
const textVert = {
  color:"hsl(178, 100%, 50%)"
}

class App extends Component {
  render() {
    return (
      <div style={styleBody}>
        <div style={card}>
          <div style={img}></div>
          <h2 style={textBlanc}>Equilibrium #3429</h2>
          <p style={textBlanc}>Our Equilibrium collection promotes balance and calm.</p>
          <div style={cont1}>
            <div style={cont11}>
              <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
              <p style={m0}>0.041 ETH</p>
            </div>
            <div style={cont11}>
              <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
              <p style={m0}>3 days left</p>
            </div>
          </div>
          <hr style={textBlanc}></hr>
          <div style={cont11}>
            <img href="./img/image-avatar.png" style={jules}></img>
            <p id="textVert" style={textBlanc}>Creation of Jules Wyvern</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
