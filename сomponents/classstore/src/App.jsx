import React, { Component } from 'react'
import './App.css'
import ShopItemClass from './ShopItemClass'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemClass brand={item.brand} title={item.title} description={item.description} descriptionFull={item.descriptionFull} currency={item.currency} price={item.price.toFixed(2)} />
      </div>
    </div>
  )
}

export default App