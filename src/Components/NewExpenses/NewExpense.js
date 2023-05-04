import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'
import { useState } from "react";

function NewExpense(props){
    const [isEditing,setIsEditing]=useState(false)
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    var startEditing=()=>{
        setIsEditing(true);
    }

    var stopEditing=()=>{
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expenses</button>}
            {isEditing &&<NewExpenseForm onSave={stopEditing} onSaveExpenseData={saveExpenseDataHandler}></NewExpenseForm>}
        </div>
    )

}

export default NewExpense;