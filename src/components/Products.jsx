import Product from "./Product";
import styles from "..//styles/products.module.css";
export default function Products({ data, basketHadler,inBasketFlag, deleteBasket}) {
  return (
    <div className={styles.wrapper}>
      {data.map((product) => (
        <Product key={product.id} data={product} handler={basketHadler} inBasketFlag={inBasketFlag} deleteBasket={deleteBasket}/>
      ))}
    </div>
  );
}