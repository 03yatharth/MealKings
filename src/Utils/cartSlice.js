import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload.e)
            state.quantity = action.payload.itemCount
            console.log(action.payload)
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(obj => obj.card.info.id === action.payload.card.info.id);
            state?.items?.splice(index, 1)
        },
        clearItem: (state) => {
            state.items.splice(0, state.items.length)
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;