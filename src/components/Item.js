import React from 'react'

export default function Item({item}) {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} alt='item_image'/>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>${item.price}</b>
      <div className='add-to-cart'> + </div>
    </div>
  )
}

