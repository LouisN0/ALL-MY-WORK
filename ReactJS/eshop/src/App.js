import React, {useState} from 'react';
import './App.css';
import Navbar from './navbar'
import Cart from './cart'

function App() {
  const [voitures] = useState([
    {
      modele: '911 gts',
      prix: 110192,
      url: 'https://files.porsche.com/filestore/image/multimedia/none/992-c4-gts-modelimage-sideshot/model/6a56f857-d3f3-11eb-80d9-005056bbdc38/porsche-model.png',
      stock: 5
    },
    {
      modele: 'Cayenne',
      prix: 99178 ,
      url: 'https://files.porsche.com/filestore/image/multimedia/none/9yb-e3c-e-hy-modelimage-sideshot/model/4c0cd2d4-a8d3-11eb-80d5-005056bbdc38/porsche-model.png',
      stock: 10
    },
    {
      modele: '911 turbo',
      prix: 200823,
      url: 'https://files.porsche.com/filestore/image/multimedia/none/911-tu-cab-modelimage-sideshot/model/3ab50343-833d-11eb-80d3-005056bbdc38/porsche-model.png',
      stock: 4
    }
  ])
  const [panier, setPanier] = useState([])
  
  let [monArgent, setMonArgent] = useState(1000000)
  
  const ajouterPanier = (voitures) => {
    setPanier([...panier, {...voitures}])
    if(monArgent < voitures.prix){
      return
    }
    else{
      setMonArgent((money) => {
      return money - voitures.prix;
    })
    }
    voitures.stock -= 1
    console.log(panier);
    
  }
  const retirerPanier = (voitureARetirer) => {
    setPanier(panier.filter((voitures) => voitures !== voitureARetirer))
    voitures.stock += 1
    setMonArgent((money) => {
      return money + voitureARetirer.prix;
    })
  }
  return (
    <div className="App">
      <Navbar argent={monArgent} />
      <div className="supcont">
      {voitures.map((voitures, i) => (
        
        <div className="cont" key={i}>
        {voitures.stock === 1 && <button className="btnOrange">ONLY ONE LEFT</button>}
        {voitures.stock === 0 && <button className="btnRouge">OUT OF STOCK</button>}
        <img className="voituresIMG" src={voitures.url} alt={voitures.modele} />
        <h3 className="modele">{voitures.modele}</h3>
        <h4 className="prix">{voitures.prix} $</h4>
        {monArgent >= voitures.prix && <button className="btn" onClick={() => ajouterPanier(voitures)}>Add to cart</button>}
      </div>
      ))}
      </div>
      <Cart voitures={voitures} panier={panier} retirerPanier={retirerPanier}/>
      
    </div>
  );
}

export default App;
