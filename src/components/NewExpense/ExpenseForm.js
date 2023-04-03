import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
      setUserInput((prevState) => {
          return {...prevState,title:event.target.value };
      });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState,amount:event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState,date:event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01 "
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
