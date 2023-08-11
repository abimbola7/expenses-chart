import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from  "./expenses-slice"
import chartSlice from "./date-slice"


const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    chart: chartSlice,
  },
});

export default store;