const { default: axios } = require('axios');

const BACKEND_URL = 'https://bart-testing-default-rtdb.europe-west1.firebasedatabase.app';

export function storeExpense(expenseData) {
  axios.post(`${BACKEND_URL}/expenses.json`, { expenseData });
}
export async function fetchExpense() {
  const res = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
