import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ExpensesTotal() {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
      return(total += item.cost);
  }, 0);
  
  return (
    <div className='alert alert-primary p-3'>
        <span>Spent so far: €{totalExpenses}</span>
    </div>
  )
}
