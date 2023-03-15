import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'

export default function Items() {
  useEffect(() => { getData() }, [])
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./products.json")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }

  return (
    <main>
      {data.map(el => (
        <Item item={el} key={el.id} />
      ))}
    </main>
  )
}
