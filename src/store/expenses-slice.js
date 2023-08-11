import { createSlice } from "@reduxjs/toolkit";

const initialExpensesState = {
        user: {
          totalBalance : 921.48,
          lastMonthExpenses : 466.85,
          totalExpenses : 478.33,
          expensesPerWeek: [
            {label : "mon", value : 17.45, date : new Date(2023,5,12)},
            {label : "tue", value : 34.91, date : new Date(2023,5,13)},
            {label : "wed", value : 52.36, date : new Date(2023,5,14)},
            {label : "thu", value : 31.07, date : new Date(2023,5,15)},
            {label : "fri", value : 23.39, date : new Date(2023,5,16)},
            {label : "sat", value : 43.28, date : new Date(2023,5,17)},
            {label : "sun", value : 25.48, date : new Date(2023,5,18)},
          ]
        }
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialExpensesState,
    reducers: {}
})

export default expensesSlice.reducer;
export const expensesActions = expensesSlice.actions;