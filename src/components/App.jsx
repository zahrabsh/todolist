import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import InputItem from "./InputItem";
import Header from "./Header";
function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([
    {
      text: null,
      checked: false,
    },
  ]);

  function handelChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handelSubmit(event) {
    setItem((prevItem) => {
      return [...prevItem, { text: inputText, checked: false }];
    });

    setInputText("");

    event.preventDefault();
  }
  function Delete(id) {
    setItem((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handelTik(id) {
    setItem((prevValue) => {
      return prevValue.map((item, index) => {
        if (index === id) {
          return { text: item.text, checked: !item.checked };
        } else return { text: item.text, checked: item.checked };
      });
    });
  }

  function DeleteAll() {
    setItem([]);
  }

  return (
    <div className="container">
      <Header />
      <InputItem
        handelChange={handelChange}
        handelSubmit={handelSubmit}
        inputText={inputText}
      />
      <div>
        {item.map((todoItem, index) => (
          <TodoItem
            key={index}
            id={index}
            todoItem={todoItem}
            delete={Delete}
            handelTik={handelTik}
          />
        ))}
      </div>
      <div>
        <button className="delete" onClick={DeleteAll}>
          <span>Delete All Items</span>
        </button>
      </div>
    </div>
  );
}

export default App;
