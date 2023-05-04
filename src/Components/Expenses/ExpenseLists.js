import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpenseLists = (props) => {

    if (props.items.length === 0) {
         return(<h2 className="expenses-list__fallback">Found no expenses</h2>)
    }

        return(
        <ul className="expense-list">
            {props.items.map((expense) => (
            <ExpenseItems
                key={expense.id}
                amount={expense.amount}
                title={expense.title}
                date={expense.date}
            />
            ))}
        </ul>
        )

    }

    export default ExpenseLists;