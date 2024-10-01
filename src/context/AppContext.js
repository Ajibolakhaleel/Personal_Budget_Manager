import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'SET_CATEGORY_LIMIT':
      return {
        ...state,
        categoryLimits: {
          ...state.categoryLimits,
          [action.payload.category]: action.payload.limit
        }
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'Food', cost: 50 },
    { id: 2, name: 'Transport', cost: 20 },
    { id: 3, name: 'Entertainment', cost: 40 }
  ],
  categoryLimits: {}
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      categoryLimits: state.categoryLimits,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};