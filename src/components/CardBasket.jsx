import { useReducer, useState, useEffect } from "react";
import styles from "..//styles/cardbasket.module.css";
const images = require.context('../img', true)
export default function CardBasket(props) {
  let handlerCount = props["countHandler"];
  let countObject = props["countProducts"];
  const [state, dispatch] = useReducer(reducer, {
    count:
      countObject.filter((product) => product.id === props[0].id).length === 0
        ? 1
        : countObject.filter((product) => product.id === props[0].id)[0].count,
  });
  const { count } = state;
  const [price, setPrice] = useState(+props[0].price.replace(" ", "") * count);
  useEffect(() => {
    setPrice(+props[0].price.replace(" ", "") * count);
  }, [count]);
  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        handlerCount(props[0].id, state.count + 1);
        return { count: state.count + 1 };
      case "minus":
        state.count > 1
          ? handlerCount(props[0].id, state.count - 1)
          : handlerCount(props[0].id, 1);
        return state.count > 1 ? { count: state.count - 1 } : { count: 1 };
      default:
        return state;
    }
  }

  function deletehandler(event) {
    const currentId = event.target.closest("div").id;
    props["removeHandler"](currentId);
  }

  return (
    <div id={props[0].id} className={styles.wrapper}>
      <div className={styles.imgWrapper} >
          <div style={{backgroundImage: `url(${images(`./${props[0].img}.png`)})`, width: '100%', height: '100%',  objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}></div>
      </div>
      <div className={styles.title}>{props[0].title}</div>
      <div className={styles.price}>{props[0].price +"  ₽"}</div>
      <div className={styles.counter}>
        <button
          onClick={() => {
            dispatch({ type: "plus" });
          }}
          className={styles.button}
        >
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.08375 6V0H9.42819V6H16.4615V8H9.42819V14H7.08375V8H0.050415V6H7.08375Z"
              fill="white"
            />
          </svg>
        </button>
        <div className={styles.value}>{count}</div>
        <button
          onClick={() => {
            dispatch({ type: "minus" });
          }}
          className={styles.button}
        >
          <svg
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.788879 0H17.2V2H0.788879V0Z" fill="white" />
          </svg>
        </button>
      </div>
      <div className={styles.result}>
        {Math.trunc(price / 1000) + " " + (price % 1000) + "  ₽"}
      </div>
      <button className={styles.delete} onClick={deletehandler}>
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"
            fill="#DF6464"
          />
        </svg>
      </button>
    </div>
  );
}
