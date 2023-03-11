import React from 'react';
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

export default function Cart() {
  const orders = useSelector((state) => state.orders);

  return (
    orders.length > 0 ? (
      <div className='shop-cart'>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    ) : <div className='shop-cart-empty'>Cart is empty</div>
  )
}