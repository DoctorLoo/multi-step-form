import {createSlice} from "@reduxjs/toolkit";

export const buttonReducer = createSlice({
    name: 'button',
    initialState: true,
    reducers: {
        toggle: (state, action) => {
            return !state;
        }
    }

});

export const {toggle} = buttonReducer.actions;
export default buttonReducer.reducer;