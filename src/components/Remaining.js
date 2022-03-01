import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function RemainingBudget() {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-budget' : 'alert-success';

  return (
    <div className={`alert p-3 ${alertType}`}>
        <span>Remaining: €{budget - totalExpenses}</span>
    </div>
  );
};
