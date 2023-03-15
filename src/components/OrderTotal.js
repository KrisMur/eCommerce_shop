import React from 'react';
import { useEffect } from 'react';

export default function OrderTotal({ orders }) {

  useEffect(() => {sumWithInitial()})

  const sumWithInitial = () => {
    let initial = 0 
    return (orders.map(order => (order.qty * order.price))).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial)
  }

  return (
    <div className='totalSum'>
    <b>Total :</b>
    <h3>${sumWithInitial().toFixed(2)}</h3>
    </div>
  )
}  