import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    //додавання товару кнопкою + на картці
    addItem: (state, action) => {
      let orderedItem = {
        id: action.payload.id,
        title: action.payload.item,
        qty: action.payload.qty,
        price: action.payload.price,
        img: action.payload.img,
      };

      const inCartItem = state.find((item) => item.id === orderedItem.id)

      //провірка чи корзина пуста
      if (state.length === 0) {
        state.push(orderedItem);
      } else {
        if (inCartItem) {
          inCartItem.qty += orderedItem.qty
        } else {
          state.push(orderedItem)
        }
      }
    },


    //додавання товару кнопкою + в корзині
    plusItem: (state, action) => {
      let orderedItem = {
        id: action.payload.id,
      };

      const inCartItem = state.find((item) => item.id === orderedItem.id )
      if (inCartItem) {
        inCartItem.qty += 1
      }
    },

    //віднімання товару кнопкою - в корзині
    minusItem: (state, action) => {
      let orderedItem = {
        id: action.payload.id,
      };

      const inCartItem = state.find((item) => item.id === orderedItem.id);

      if (inCartItem && inCartItem.qty > 1) {
        inCartItem.qty -= 1 
      } else {
        //видаляєм елемент з корзини, якщо кількість = 0
        state.splice(state.indexOf(inCartItem), 1)
      }
    },
  }
})

export const { addItem, plusItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;