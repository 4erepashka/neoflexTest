import React from "react";
import styles from "../styles/catalog.module.css";
import { useState, useEffect } from "react";
import Products from "../components/Products";
import jsonList from "../products.json";

export default function Catalog({ handler, inBasketFlag, deleteBasket }) {
  const [wiredData, setWiredData] = useState([]);
  const [wirelessData, setWirelessData] = useState([]);
  useEffect(() => {
    setWiredData(jsonList.filter((product) => product.type === "wired"));

    setWirelessData(jsonList.filter((product) => product.type === "wireless"));
    return () => {};
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardsEarPods}>
        <div className={styles.cardsEarPodsTitle}>Наушники</div>
        <div className={styles.cards}>
          <Products data={wiredData} basketHadler={handler} inBasketFlag={inBasketFlag} deleteBasket={deleteBasket} />
        </div>
      </div>
      <div className={styles.cardsEarPodswireless}>
        <div className={styles.cardsEarPodswirelessTitle}>
          Беспроводные наушники
        </div>
        <div className={styles.cards}>
          <Products data={wirelessData} basketHadler={handler} inBasketFlag={inBasketFlag} deleteBasket={deleteBasket} />
        </div>
      </div>
    </div>
  );
}
