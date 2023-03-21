import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem } from '../redux/cartSlice';


export default function OrderItem({ order }) {
  const dispatch = useDispatch();

  let maxItemAvalibleInitial = Number(localStorage[`${order.id}`]);
  let [maxAvalible, setMaxAvalible] = useState(maxItemAvalibleInitial);

  const onClickPlus = () => {
     if (maxAvalible > 0) {
      dispatch(plusItem({
      id: order.id,
      }))
      localStorage.setItem(`${order.id}`, `${maxAvalible-1}`);
      setMaxAvalible(maxAvalible-1)
     } else {
      alert('Sorry, this is The maximum amount of the product that is available for sale.')
     }
  }

  const onClickMinus = () => {
    dispatch(minusItem({
      id: order.id,
    }))
    localStorage.setItem(`${order.id}`, `${maxAvalible+1}`);
    setMaxAvalible(maxAvalible+1)
  }

  return (
    <div className='item'>
      <img src={"./img/" + order.img} alt='item_image' />
      {order.title.length >= 20
        ? <h2>{(order.title.match(/([a-zа-яё]+)/i))[0]}</h2>
        : <h2>{order.title}</h2>}
      <div className='amount-button'>
        <button onClick={onClickPlus}> + </button>
        <b>{order.qty}</b>
        <button onClick={onClickMinus}>&minus;</button>
      </div>
      
      <h1>${order.price}</h1>
      <h2>{(order.qty * order.price).toFixed(2)}</h2>
    </div>
  )
}