import { useCallback, useState } from "react";

export function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleTextChange = useCallback((event) => {
    setInputText(event.target.value);
  }, []);

  function markItemAsDone(index) {
    if (index % 2 === 0) {
      console.error("You can't mark even items as done!");
      return;
    }

    setTodoItems((previousValue) => {
      const newTodoItems = [...previousValue];
      newTodoItems[index] = {
        ...newTodoItems[index],
        done: true,
      };
      return newTodoItems;
    });
  }

  const addTodoItem = useCallback((event) => {
    event.preventDefault();

    setTodoItems((previousValue) => [
      ...previousValue,
      {
        title: inputText,
        done: false,
      },
    ]);
    setInputText("");
  }, [inputText]);

  const deleteTodoItem = useCallback((index) => {
    setTodoItems((previousValue) => {
      const newTodoItems = [...previousValue];
      newTodoItems.splice(index, 1);
      return newTodoItems;
    });
  }
  , []);

  return (
    <div>
      <form onSubmit={addTodoItem}>
        <input
          type="text"
          name="todo-item"
          placeholder="Add a new item"
          value={inputText}
          onChange={handleTextChange}
        />
      </form>
      <ul>
        {todoItems.map((item, index) => (
          <li key={item.title}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={function () {
                markItemAsDone(index);
              }}
            />
            <span>{item.title}</span>
            <button onClick={function () {
              deleteTodoItem(index);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
