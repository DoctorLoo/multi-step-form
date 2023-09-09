import {createSlice} from "@reduxjs/toolkit";

const customizableProfileReducer = createSlice({
    name:"customizableProfileReducer",
    initialState: false,
    reducers: {
        toggleCustomizableProfile: (state, action)=>{
            return !state;
        }
    }
});

export const {toggleCustomizableProfile} = customizableProfileReducer.actions;
export default customizableProfileReducer.reducer;