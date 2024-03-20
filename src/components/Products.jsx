import Product from "./Product";
import styles from '..//styles/products.module.css'
export default function Products({ data, basketHadler }) {
  return (
    <div className={styles.wrapper}>
      {data.map((product) => (
        <Product key={product.id} data={product} handler={basketHadler} />
      ))}
    </div>
  );
}
