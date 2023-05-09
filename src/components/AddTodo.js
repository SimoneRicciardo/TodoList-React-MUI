import React from "react";

const AddTodo = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title);
    e.target.title = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Todo</h3>
        <input placeholder="titolo" type="text" title="title" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddTodo;