import React from 'react';

const ExpenseContext = React.createContext();

export default ExpenseContext;

import ExpenseContext from './ExpenseContext';
import { AppContext } from './AppContext';

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <AppContext.Provider value={{ expenses, setExpenses }}>
      <AppContent />
    </AppContext.Provider>
  );
}