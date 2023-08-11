import React from "react";
import { useSelector } from "react-redux";
import ExpenseChart from "../Chart/expense-chart";
import TotalExpense from "./TotalExpense";
import Card from "../UI/Card";

const Expense = (props) => {
  const expenses = useSelector(state=>state.expenses.user.expensesPerWeek);
  return (
    <Card className="space-y-4 bg-white">
      <h1 className="mb-12 text-2xl font-semibold text-darkBrown">Spending - Last 7 Days</h1>
      <ExpenseChart
      expenses={expenses}
      />   
      <TotalExpense/>
    </Card>
  )
};

export default Expense;