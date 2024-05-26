function TodoItem(props) {
  if (props.todoItem.text !== null)
    return (
      <div className="item">
        <input
          type="checkbox"
          id="check"
          onChange={() => props.handelTik(props.id)}
          checked={props.todoItem.checked ? true : false}
          style={{
            float: "left",
            border: "1px solid transparent",
            margin: "0.5rem",
          }}
        />
        <label
          style={{
            textDecoration: props.todoItem.checked ? "line-through" : "none",
          }}
          onClick={() => {
            props.delete(props.id);
          }}
        >
          {props.todoItem.text}
        </label>
      </div>
    );
}
export default TodoItem;
