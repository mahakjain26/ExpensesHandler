import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  var handleClick = () => {
    // setTitle("Updated")
    console.log("clicked");
  };
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleClick}>Delete</button>
      </Card>
    </div>
  );
}

export default ExpenseItems;
