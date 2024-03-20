import React from "react";
import styles from '..//styles/product.module.css'
const images = require.context('../img', true)
export default function Product({ data, handler }){
    function handlerClick(event) {
        
        handler(data.id);
      }
    return(
        <div id={data.id} className={styles.wrapper}>
            <div className={styles.imgWrapper} >
               <div style={{backgroundImage: `url(${images(`./${data.img}.png`)})`, width: '100%', height: '100%',  objectFit: 'contain', backgroundRepeat: 'no-repeat'}}></div>
            </div>
            <div className={styles.descr}>
                <div className={styles.name}>{data.title}</div>
                <div className={styles.price}>{data.price} ₽</div>
            </div>
            <div className={styles.rate}>
                        <svg className={styles.star} width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                        </svg>
                        <div className={styles.rateValue}>{data.rate}</div>
            </div>
            <button onClick={handlerClick} className={styles.button}>Купить</button>
        </div>
    )
}