export default function InputItem(props) {
  return (
    <div>
      <form className="form" onSubmit={props.handelSubmit}>
        <input onChange={props.handelChange} value={props.inputText}></input>
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
