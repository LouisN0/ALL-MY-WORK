import React, {Component } from 'react';

//selection des elements
let body = document.getElementsByTagName('body')[0];



//style
body.style.backgroundColor = 'hsl(226, 43%, 10%)'
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh'
body.style.margin = '0'

const divSize = {
  width: '72vw',
  height: '70vh',
  display: 'flex',
}

const div1 = {
  height: '100%',
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const div2 = {
  height: '100%',
  width: '70%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 31.8%)',
  gridTemplateRows: 'repeat(2, 47.5%)',
  gridColumnGap: '30px',
  gridRowGap: '30px'
}

const premierBlock = {
  width: '90%',
  height: '100%',
  backgroundColor: 'hsl(235, 46%, 20%)',
  borderRadius: '20px'
  
}

const premierBlockChild = {
  width: '100%',
  height: '60%',
  backgroundColor: 'hsl(246, 80%, 60%)',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const divGridChild = {
  width: '100%',
  height: '80%',
  backgroundColor: 'hsl(235, 46%, 20%)',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const div1grid = {
  gridArea: '1 / 1 / 2 / 2',
  width:'100%',
  borderRadius:'20px',
  backgroundColor:'hsl(15, 100%, 70%)',
  display:'flex',
  alignItems: 'end'
}

const div2grid = {
  gridArea: '1 /2 / 2 / 3',
  width:'100%',
  backgroundColor: 'hsl(195, 74%, 62%)',
  borderRadius: '20px',
  display:'flex',
  alignItems: 'end'
}

const div3grid = {
  gridArea: '1 / 3 / 2 / 4',
  width:'100%',
  backgroundColor: 'hsl(348, 100%, 68%)',
  borderRadius: '20px',
  display:'flex',
  alignItems: 'end'
}

const div4grid = {
  gridArea: '2 / 3 / 3 / 4',
  width:'100%',
  backgroundColor: 'hsl(43, 84%, 65%)',
  borderRadius: '20px',
  display:'flex',
  alignItems: 'end'
}

const div5grid = {
  gridArea: '2 / 2 / 3 / 3',
  width:'100%',
  backgroundColor: 'hsl(264, 64%, 52%)',
  borderRadius: '20px',
  display:'flex',
  alignItems: 'end'
}

const div6grid = {
  gridArea: '2 / 1 / 3 / 2',
  width:'100%',
  backgroundColor: 'hsl(145, 58%, 55%)',
  borderRadius: '20px',
  display:'flex',
  alignItems: 'end'
}
const imgW = {
  width:'25%',
  border: '3px solid white',
  borderRadius: '50%',
}

const displayFlex = {
  width:'80%',
  height: '80%'
}

const mMax = {
  margin: '25%'
}

const grandText = {
  fontSize: '40pt',
  color: 'white',
  margin: '0'
}

const moyenText = {
  fontSize: '20pt',
  color: 'white',
  margin: '5px'
}

const petitText = {
  fontSize: '14pt',
  color:'gray',
}

class App extends Component {
  render() { 
    return(
      <div style={divSize}>
        <div style={div1}>
          <div style={premierBlock}>
            <div style={premierBlockChild}>
              <div style={displayFlex}>
                <img style={imgW} src="./images/image-jeremy.png" alt="" />
                <p>Report for</p>
                <h2 style={grandText}>Jeremy<br /> Robson</h2>
              </div>
            </div>
            <div>
              <div style={mMax}>
              <p style={petitText}>Daily</p>
              <p style={petitText}>Weekly</p>
              <p style={petitText}>Monthly</p>
              </div>
            </div>
          </div>
        </div>
        <div style={div2}>
          <div style={div1grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
              <p style={moyenText}>Work</p>
              <h2 style={grandText}>32hrs</h2>
              <p style={petitText}>Last Week - 36hrs</p>
              </div>
            </div>
          </div>
          <div style={div2grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
            <p style={moyenText}>Play</p>
              <h2 style={grandText}>10hrs</h2>
              <p style={petitText}>Last Week - 8hrs</p>
              </div>
            </div>
          </div>
          <div style={div3grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
            <p style={moyenText}>Study</p>
              <h2 style={grandText}>4hrs</h2>
              <p style={petitText}>Last Week - 7hrs</p>
              </div>
            </div>
          </div>
          <div style={div4grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
            <p style={moyenText}>Self Care</p>
              <h2 style={grandText}>2hrs</h2>
              <p style={petitText}>Last Week - 2hrs</p>
              </div>
            </div>
          </div>
          <div style={div5grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
            <p style={moyenText}>Social</p>
              <h2 style={grandText}>5hrs</h2>
              <p style={petitText}>Last Week - 10hrs</p>
              </div>
            </div>
          </div>
          <div style={div6grid}>
            <div style={divGridChild}>
              <div style={displayFlex}>
            <p style={moyenText}>Exercise</p>
              <h2 style={grandText}>4hrs</h2>
              <p style={petitText}>Last Week - 5hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
}

export default App;
