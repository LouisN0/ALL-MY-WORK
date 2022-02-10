import React from 'react';

function Cart(props) {
    const {panier, retirerPanier} = props
    return(
    <div>
        <h2 className="titre2">CART</h2>
        <div className="supcont">
        {panier.map((voitures, i) => (
        <div className="cont" key={i}>
        <img className="voituresIMG" src={voitures.url} alt={voitures.modele} />
        <h3 className="modele">{voitures.modele}</h3>
        <h4 className="prix">{voitures.prix} $</h4>
        <button className="btn" onClick={() => retirerPanier(voitures)}>remove</button>
      </div>
      ))}
      </div>
      </div>
)}

export default Cart