import React from "react"
import { useSelector } from "react-redux";

const TotalExpense = () => {
  const lastMonth = useSelector(state=>state.expenses.user.lastMonthExpenses);
  const thisMonth = useSelector(state=>state.expenses.user.totalExpenses);
  const percentage = (100 - (lastMonth / thisMonth) * 100).toFixed(1).toString()
  
  return (
    <div className="space-y-1">
      <p
      className="text-sm text-mediumBrown"
      >Total this month</p>
      <div className="flex justify-between item-end text-darkBrown">
        <p className="text-xl font-bold sm:text-4xl">${thisMonth}</p>
        <div className="flex flex-col items-end">
          <p
          className="text-sm font-bold text-darkBrown"
          >{` ${percentage.includes("-") ? `-${percentage}%` : `+${percentage}%`} `}
          </p>
          <p className="text-sm text-mediumBrown">from last month</p>
        </div>
      </div>
    </div>
  )
};

export default TotalExpense;