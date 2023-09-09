import {createSlice} from "@reduxjs/toolkit";


//name yearly/monthly cost

const planReducer = createSlice({
    name: "planReducer",
    initialState: {},
    reducers: {
        setPlan: (state, action)=>{
            return {
                type: action.payload.type,
                yearlyOrMonthly: action.payload.yearlyOrMonthly,
                cost: action.payload.cost
            }
        }
    }
});

export const {setPlan} = planReducer.actions;
export default planReducer.reducer;

