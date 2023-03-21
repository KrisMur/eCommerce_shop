import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice';

export default function Item({ item }) {

  let maxItemAvalibleInitial = Number(localStorage[item.id]);
  let [maxAvalible, setMaxAvalible] = useState(maxItemAvalibleInitial);

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  
  const onChange = (e) => {
    let value = Number(e.target.value)
      value > 100 || value > maxAvalible
      ? alert(`Too big number of quantity maximum amount ${maxAvalible}`)
      : setQty(value);
  }

  const onClickAddButton = () => {
    if (maxAvalible > 0 ) {
      dispatch(addItem({
        id: item.id,
        item: item.title,
        qty: qty,
        price: item.price,
        img: item.img,
      }));
      localStorage[item.id] = maxAvalible-qty;
      setMaxAvalible(maxAvalible-qty);
      setQty(1);
    } else {
      alert(`Sorry,the product is not available for sale`)
    }
  }

  return (
    <div className='item'>
      <img src={"./img/" + item.img} alt='item_image' />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <div className='order'>
        <b>${item.price}</b>
        <label> Quantity:  &nbsp;
          <input type="number" min="1" max="100" step="1" className="input" name="qty_item" onChange={onChange} value = {qty || ''}></input>
        </label>
      </div>
      <div className='add-to-cart' onClick={onClickAddButton}> + </div>
    </div>
  )
}

