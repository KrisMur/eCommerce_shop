import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name : 'orders',
  initialState : [],
  reducers: {
  //додавання товару кнопкою + на картці
    addItem: (state, action) => {
      let orderedItem = {
        id: action.payload.id,
        title: action.payload.item,
        qty : action.payload.qty,
      };

      const inCartItem = state.find((item) => item.id === orderedItem.id )

      if (state.length === 0) {
        state.push(orderedItem);
      } else {
        (inCartItem) ? inCartItem.qty += orderedItem.qty : state.push(orderedItem);
      }
    }


  }
})

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;