import { Link } from "react-router-dom";
import CardBasket from "./CardBasket";
import styles from '..//styles/products.module.css'
export default function Basket({ basketItems, removeHandler, countProducts }) {
  console.log("in basket", basketItems);
  return (
    <div style={{ minHeight: "1000px" }}>
      <div>кол-во товаров в корзине: {basketItems.length}</div>
      <h1>Basket</h1>
      {basketItems.map((item) => (
        <CardBasket key={item[0].id} {...item} removeHandler={removeHandler} />
      ))}

      <Link to="/">Назад в каталог</Link>
    </div>
  );
}
