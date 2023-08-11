import React from "react"
import Chart from "./chart";

const ExpenseChart = (props) => {
  const { expenses } = props;
  const expensesValues = expenses.map(elem=>elem.value)
  const maxValue = Math.max(...expensesValues);
  return (
    <div
    className="flex justify-center w-full px-3 pb-10 space-x-3 border-b"
    >
      {
        expenses.map((elem)=>
        <Chart
        key={elem.label}
        max={maxValue}
        label={elem.label}
        value={elem.value}
        date={elem.date}
        />
        )
      }
    </div>
  )
};

export default ExpenseChart;