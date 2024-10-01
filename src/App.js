import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseChart from './components/ExpenseChart';
import { AppProvider, AppContext } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import CategoryLimitForm from './components/CategoryLimitform';

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent = () => {
  const { expenses } = React.useContext(AppContext);
  
  const chartExpenses = expenses.map(expense => ({
    category: expense.name,
    amount: expense.cost
  }));

  return (
    <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
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
          <AddExpenseForm />
        </div>
      </div>
      <h3 className='mt-3'>Set Category Limit</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <CategoryLimitForm />
        </div>
      </div>
      <div>
        <ExpenseChart expenses={chartExpenses} />
      </div>
    </div>
  );
};

export default App;