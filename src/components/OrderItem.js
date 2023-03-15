import React from 'react';


export default function OrderItem({ order }) {
  return (
    <div className='item'>
      <img src={"./img/" + order.img} alt='item_image' />
      {order.title.length >= 20
        ? <h2>{(order.title.match(/([a-zа-яё]+)/i))[0]}</h2>
        : <h2>{order.title}</h2>}
      <div className='amount-button'>
        <button> + </button>
        <b>{order.qty}</b>
        <button>&minus;</button>
      </div>
      
      <h1>${order.price}</h1>
      <h2>{order.qty * order.price}</h2>
    </div>
  )
}