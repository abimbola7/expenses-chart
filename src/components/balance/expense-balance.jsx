import React from "react";
import "./expense-balance.css"
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const ExpenseBalance = (props) => {
  const balance  = useSelector(state=>state.expenses.user.totalBalance)
  return (
    <Card className="flex items-center justify-between text-white bg-softRed">
      <div className="space-y-1">
        <p className="text-sm">My balance</p>
        <p className="text-2xl font-semibold">${balance}</p>
      </div>
      <div className="relative w-10 h-10 rounded-full bg-darkBrown after:absolute after:w-10 after:h-10 after:rounded-full after:border after:border-white after:-left-6">
      </div>
    </Card>
  )
};

export default ExpenseBalance;