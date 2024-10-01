import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses, categoryLimits } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  const getCategoryTotal = (category) => {
    return expenses
      .filter((expense) => expense.name === category)
      .reduce((total, expense) => total + expense.cost, 0);
  };

  const renderCategoryAlert = (category) => {
    const total = getCategoryTotal(category);
    const limit = categoryLimits[category];
    if (limit && total > limit) {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          {`Warning: ${category} expenses (NGN${total}) have exceeded the limit of NGN${limit}!`}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Type to search...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <React.Fragment key={expense.id}>
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
            {renderCategoryAlert(expense.name)}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;