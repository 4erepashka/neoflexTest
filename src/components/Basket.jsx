import { Link } from "react-router-dom";
import CardBasket from "./CardBasket";
import styles from "..//styles/basket.module.css";
export default function Basket({
  basketItems,
  removeHandler,
  countProducts,
  countHandler,
  resultSum,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Корзина</div>
      {basketItems.length === 0?<div className={styles.empty}>Самое время что-то сюда положить!</div>:null}
      {basketItems.map((item) => (
        <CardBasket
          key={item[0].id}
          {...item}
          countHandler={countHandler}
          removeHandler={removeHandler}
          countProducts={countProducts}
        />
      ))}

      <Link className={styles.back} to="/neoflexTest">
        <svg width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
          </defs>
          <g data-name="arrow left" id="arrow_left">
          <path className="cls-1" d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"/>
          </g>
        </svg>
      </Link>
      {basketItems.length !== 0 && (
        <div className={styles.result}>
          <div className={styles.priceTitle}>Итого</div>
          <div className={styles.price}>
            { "₽ "+Math.trunc(resultSum / 1000) + " " + (resultSum % 1000)}
          </div>
          <Link className={styles.order} to="/neoflexTest/order">Перейти к оформлению</Link>
        </div>
      )}
    </div>
  );
}
