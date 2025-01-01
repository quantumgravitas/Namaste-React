const { createSlice } = require("@reduxjs/toolkit");

const cartSlice=createSlice({
  name: 'cart',
  initialState:{
    items: []
  },
  reducers:{
    addItem:(state,action)=>{
      state.items.push(action.payload)
    },
    removeItem:(state)=>{
      state.items.pop();
    },
    clearCart:(state)=>{
      state.items.length=0;
      //return { items:[]};
      //either you directly mutate the state or return the new state.here we have sent an empty array so the original state will be modified
      //in older versions of redux you compalsarily have to mutate the state. and you must not mutate the original state
      //redux toolkit have solved this problem so that we are able to mutate the original state but behind the scenes redux toolkit is doing exactly the same,we were doing in the older redux versions
    }
  }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions ;

export default cartSlice.reducer ;