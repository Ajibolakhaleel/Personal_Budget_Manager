import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';




ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  // Group expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(expensesByCategory),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Summary',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ExpenseChart;