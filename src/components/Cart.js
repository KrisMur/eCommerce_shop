import React from 'react';
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import OrderTotal from './OrderTotal'

export default function Cart() {
  const orders = useSelector((state) => state.orders);

  return (
    orders.length > 0
    ? (<div className='shop-cart'>
        <div className='header-cart'>
          <div>Photo</div>
          <div>Item</div>
          <div>Amount</div>
          <div>Price</div>
          <div>Сost of goods</div>
        </div>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />))
        }
        <OrderTotal orders={orders}/>
      </div>)
    : <div className='shop-cart-empty'>Cart is empty</div>
  )
}