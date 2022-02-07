import { useEffect, useState } from 'react';
import './App.css';

// function displayNone() {
  
//   h1.style.display = 'none';
// }


let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let sisccor = document.getElementById('sisccor')
let computer = document.getElementsByTagName('computer')[0]
let userRes
let i = 0
console.log(paper);
function clicked(e) {
  rock.setAttribute('alt', '')
  paper.setAttribute('alt', '')
  sisccor.setAttribute('alt', '')
  e.target.setAttribute('alt', 'clicked')
  userRes = e.target.attributes[0]
}


if(userRes == 'rock' && computer.getAttribute('alt') == 'sicssor'){
  i++
}

else if(userRes == 'paper' && computer.getAttribute('alt') == 'rock'){
  i++
}

else if(userRes == 'sisccor' && computer.getAttribute('alt') == 'paper'){
  i++
}

let tabComp = ["http://localhost:3000/static/media/rock.cc0ef6a8d892a157d092.png","http://localhost:3000/static/media/paper.04688c9b5bc7602461ee.png","http://localhost:3000/static/media/sisccor.c74ae1e2349211da5686.png"]

function Computer(){
  const randomImage = tabComp[Math.floor(Math.random() * tabComp.length)];
  
  return <img src={randomImage} style={{height: 200}, {width: 200}}/>
}

function App() {
  // const [index, setIndex] = useState(0)
  // useEffect(() => {
  //   let compteur = setTimeout(() => {
  //     if (index > 1) {
  //     setIndex(0)
  //     } else {
  //       setIndex(index+1)
  //     }
  //   }, 1000);
  //   console.log(index);
  //   return () => clearTimeout(compteur)
  // }, [index])


  return (
    <div>
      <h1 id="title">LET'S PLAY</h1>
      <div id='taille'>
        <h2 className='player'>THE COMPUTEUR</h2>
        <div id='flex'>
          {rock.attributes[1] == 'clicked' && <Computer />}
          {paper.attributes[1] == 'clicked' && <Computer />}
          {sisccor.attributes[1] == 'clicked' && <Computer />}
        </div>
        <hr id="hr" />
      </div>
      <div id="game">
        <div id="rock" alt='rock' onClick={clicked}></div>
        <div id="paper" onClick={clicked}></div>
        <div id="sisccor" onClick={clicked}></div>
      </div>
      <h2 className='player'>YOU</h2>
      <p>Your score: {i}</p>
    </div>
  );
}

export default App;
