import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";

function Transaction() {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.category);
  const transaction = useSelector((state: any) => state.transaction);
  const [label, setLabel] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const handleSave = () => {
    if (category === "" || amount === 0 || label === "") {
      alert("Please fill all the fields");
    }
    const id = Math.floor(Math.random() * 100000);
    dispatch({
      type: actions.ADD_TRANSACTION,
      payload: {
        [id]: {
          date: new Date().toLocaleDateString(),
          label: label,
          amount: amount,
          category_id: category,
          category: categories[category],
        },
      },
    });
    setLabel("");
    setAmount(0);
    setCategory("");
  };

  return (
    <div className="padding-box">
      <div className="mb-3">
        <label className="form-label label-heading">Label</label>
        <input
          onChange={(e) => setLabel(e.target.value)}
          value={label}
          type="text"
          className="form-control"
          placeholder="Category name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label label-heading">Amount</label>
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          type="number"
          className="form-control"
          placeholder="Id"
        />
      </div>
      <div className="mb-3">
        <label className="form-label label-heading">Category id</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Open this select menu</option>
          {Object.keys(categories).map((i, index) => {
            return (
              <option key={index} value={i}>
                {categories[i]}
              </option>
            );
          })}
        </select>
      </div>
      <button className="btn btn-lg btn-dark" onClick={handleSave}>
        Submit
      </button>
      <hr />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">category</th>
            <th scope="col">label</th>
            <th scope="col">date</th>
            <th scope="col">amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(transaction).map((i, index) => {
            return (
              <tr key={index}>
                <th scope="row">{i}</th>
                <td>{transaction[i].category}</td>
                <td>{transaction[i].label}</td>
                <td>{transaction[i].date}</td>
                <td>{transaction[i].amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
