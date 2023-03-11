import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice';

export default function Item({item}) {
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    dispatch(addItem({
      id: item.id,
      item: item.title,
      qty: 1,
    }))
  }
  return (
    <div className='item'>
      <img src={"./img/" + item.img} alt='item_image'/>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>${item.price}</b>
      <div className='add-to-cart' onClick={onClickAddButton}> + </div>
    </div>
  )
}

