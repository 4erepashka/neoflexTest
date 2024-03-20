import { useReducer } from "react";

export default function CardBasket(props) {
  console.log("in card", props);

  const [state, dispatch] = useReducer(reducer, {
    count: 1,
  });
  const { count } = state;

  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return { count: state.count + 1 };
      case "minus":
        return state.count > 1 ? { count: state.count - 1 } : { count: 1 };
      default:
        return state;
    }
  }
  function deletehandler(event) {
    const currentId = event.target.closest("div").id;
    console.log(currentId);
    props["removeHandler"](currentId);
  }


  return (
    <div
      id={props[0].id}
      className="card"
      style={{
        width: 400,
        height: 100,
        backgroundColor: "gray",
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div className="card-img">{props[0].img}</div>
      <div className="card-title">{props[0].title}</div>
      <div className="card-price">{props[0].price}</div>
      <div
        className="card-btns"
        style={{
          width: 120,
          height: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "plus" }) ;
          }}
          style={{ width: 50, height: 20, backgroundColor: "white" }}
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={() => {
            dispatch({ type: "minus" });
          }}
          style={{ width: 50, height: 20, backgroundColor: "white" }}
        >
          -
        </button>
      </div>
      <button onClick={deletehandler}>delete</button>
    </div>
  );
}
