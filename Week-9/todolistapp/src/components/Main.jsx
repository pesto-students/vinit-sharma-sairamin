import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Footer, Heading, Input, TodoItem } from "./";
import "./main.css";

const Main = () => {
  const [inputItem, setInputItem] = useState();
  const [todoItems, setTodoItems] = useState([]);

  //fetch values from the localstorage
  useEffect(() => {
    var fetchTodoItmes = JSON.parse(localStorage.getItem("toDoAppReact"));
    if (fetchTodoItmes) {
      setTodoItems(fetchTodoItmes);
    }
  }, []);

  //putting values into the localstorage
  useEffect(() => {
    localStorage.setItem("toDoAppReact", JSON.stringify(todoItems));
  }, [todoItems]);

  //creating task on "Enter" key
  function onEnterKey(e) {
    if (e.key === "Enter") {
      createTodoItem();
    }
  }

  //function invoke on click event
  function createTodoItem() {
    var todoItemId = uuidv4(); //generating unique id

    if (inputItem) {
      var todoItemObject = {
        id: todoItemId,
        text: inputItem,
        status: "undone",
      };

      setTodoItems((oldTodoItems) => {
        return [...oldTodoItems, todoItemObject];
      });
      setInputItem("");
    } else {
      alert("Text Box can not be empty");
    }
  }

  return (
    <div className="main_container">
      <Heading />
      <div className="sub_container">
        <Input
          inputItem={inputItem}
          onEnterKey={onEnterKey}
          onSetInputItem={setInputItem}
        />
        <Button onClickAddButton={createTodoItem} />
        <ol>
          {todoItems.map((todoItem) => {
            return (
              <TodoItem
                id={todoItem.id}
                key={todoItem.id}
                setTodoItems={setTodoItems}
                status={todoItem.status}
                text={todoItem.text}
                todoItems={todoItems}
              />
            );
          })}
        </ol>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
