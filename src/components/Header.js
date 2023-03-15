import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Cart from './Cart'

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Your account</li>
        </ul>
        <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (<Cart />)}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
