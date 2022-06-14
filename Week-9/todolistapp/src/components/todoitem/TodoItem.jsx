import React from "react";
import PropTypes from "prop-types";
import _noop from "lodash/noop";
import "./todoItem.css";

const TodoItem = ({ id, setTodoItems, status, text, todoItems }) => {
  //to change the status of todoitem
  function changeStatusTodoItem(status, id) {
    var changeStatus;
    if (status === "undone") {
      changeStatus = "done";
    } else {
      changeStatus = "undone";
    }

    var updatedTodoItem = todoItems.filter((todoItem) => {
      if (todoItem.id === id) {
        return (todoItem.status = changeStatus);
      }
      return todoItem;
    });

    setTodoItems(() => {
      return [...updatedTodoItem];
    });
  }

  //to delete current todoitem
  function deleteTodoItem(id) {
    var updatedTodoItems = todoItems.filter((todoItem) => {
      return todoItem.id !== id;
    });

    setTodoItems(() => {
      return [...updatedTodoItems];
    });
  }

  return (
    <li className="todoitem_container">
      <div
        className={`todoitem_text ${status}`}
        onClick={() => changeStatusTodoItem(status, id)}
      >
        {text}
      </div>
      <div
        className="fa fa-trash-o todoitem_delete_button"
        onClick={() => deleteTodoItem(id)}
      ></div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  setTodoItems: PropTypes.func,
  status: PropTypes.string,
  text: PropTypes.string,
  todoItems: PropTypes.array,
};

TodoItem.defaultProps = {
  id: "",
  setTodoItems: _noop,
  status: "",
  text: "",
  todoItems: [],
};

export default TodoItem;
