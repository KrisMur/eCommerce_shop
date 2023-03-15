import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice';

export default function Item({ item }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const onChange = (e) => {
    let value = Number(e.target.value)
    value > 1000
      ? alert('Too big number of quantity')
      : setQty(value)
  }

  const onClickAddButton = () => {
    dispatch(addItem({
      id: item.id,
      item: item.title,
      qty: qty,
      price: item.price,
      img: item.img
    }));
    setQty(1)
  }

  return (
    <div className='item'>
      <img src={"./img/" + item.img} alt='item_image' />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <div className='order'>
        <b>${item.price}</b>
        <label> Quantity:  &nbsp;
          <input type="number" min="1" max="100" step="1" className="input" name="qty_item"  onChange={onChange} value = {qty || ''}></input>
        </label>
      </div>
      <div className='add-to-cart' onClick={onClickAddButton}> + </div>
    </div>
  )
}

