import { createSlice } from "@reduxjs/toolkit";

const initialChartState = {
    chartDataPoints : [
        {label : "sun", value : 0},
        {label : "mon", value : 0},
        {label : "tue", value : 0},
        {label : "wed", value : 0},
        {label : "thu", value : 0},
        {label : "fri", value : 0},
        {label : "sat", value : 0},
    ]
}

const chartSlice = createSlice({
    name: 'date',
    initialState: initialChartState,
    reducers: {}
})

export default chartSlice.reducer;
export const chartActions = chartSlice.actions;