
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import RemainingBudget from './components/Remaining'
import ExpensesTotal from './components/ExpensesTotal'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import AddExpensesForm from './components/AddExpensesForm'
import { AppProvider } from './context/AppContext'

export default function App() {

  return (
    <AppProvider>
    <div className='container'>
      <h1 className='mt-3'>My Trip Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <ExpensesTotal />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row '>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpensesForm />
        </div>
      </div>
    </div>
  </AppProvider>
);
    


    
   
  
}


