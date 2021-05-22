import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      expenseTitle: "Car Insurance",
      expenseAmount: 265.65,
      expenseDate: new Date(2021, 2, 28),
    },
    {
      id: 2,
      expenseTitle: "Paper",
      expenseAmount: 23.2,
      expenseDate: new Date(2011, 1, 8),
    },
  ];
  return (
    <Card>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
      ))}
    </Card>
  );
}

export default App;
