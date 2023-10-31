import React from 'react'

export default function Produit({produit}) {
  return (
    <div>
<img src={produit.images[0]} alt={produit.name} />
<p>{produit.description}</p>
<p>{produit.prix}</p>
<button>Ajouter au panier</button>
    </div>
  )
}
