import React from 'react';

export default function OrderItem({order}) {
  return (
      <div className='item'>
      <h2>{order.title}</h2>
      <b>{order.qty}</b>
      </div>
  )
}