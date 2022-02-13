import "./styles.css";
// import ExpensesItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
  let expense = [
    {
      id: "e1",
      title: "School Fee",
      amount: 700,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e2",
      title: "Books",
      amount: 300,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e3",
      title: "House Rent",
      amount: 600,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e4",
      title: "Collage",
      amount: 200,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e5",
      title: "School Fee",
      amount: 800,
      date: new Date(2021, 5, 12)
    }
  ];
  //  let expenseDate= new Date(2021, 3, 28);
  //  let expenseTitle="School fee";
  //  let expenseAmount=300;

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses item={expense} />
    </div>
  );
};
export default App;
