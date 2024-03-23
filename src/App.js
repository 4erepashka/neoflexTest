import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";
import MainPage from "./layout/MainPage";
import Catalog from "../src/layout/Catalog";
import Basket from "../src/components/Basket";
import jsonList from "./products.json";
import "./styles.css";
import { useEffect } from "react";

function App() {
  const [basketData, setBasketData] = useState([]);
  const [countProducts, setCount] = useState([]);
  const [sum, setSum] = useState(
    basketData.reduce((acc, item) => acc + +item[0].price.replace(" ", ""), 0)
  );
  const [inBasketFlag, setInBasketFlag] = useState([])

  function hadlerResultSum() {
    setSum(
      countProducts.reduce(
        (acc, obj) =>
          acc +
          obj.count *
            +basketData
              .filter((el) => el[0].id === obj.id)[0][0]
              .price.replace(" ", ""),
        0
      )
    );
  }
  useEffect(() => {
    if (countProducts.length === 0) {
      setSum(
        basketData.reduce(
          (acc, item) => acc + +item[0].price.replace(" ", ""),
          0
        )
      );
    } else hadlerResultSum();
  }, [basketData, countProducts]);

  let countProductsHandler = (id, count) => {
    countProducts.filter((item) => item.id === id)
      ? setCount([
          ...countProducts.filter((item) => item.id !== id),
          { id: id, count: count },
        ])
      : setCount([...countProducts, { id: id, count: count }]);
  };

  let removeBasketItems = (id) => {
    setBasketData(basketData.filter((item) => item[0].id !== +id));
    setCount(countProducts.filter((item) => item.id !== +id));
    setInBasketFlag(inBasketFlag.filter((item) => item.id !== +id));
  };
  let basketHadler = (id) => {
    basketData.every((list) => list[0].id !== id) &&
      setBasketData([
        ...basketData,
        jsonList.filter((item) => item.id === +id),
      ]);

    countProducts.filter((item) => item.id !== id) &&
      setCount([...countProducts, { id: id, count: 1 }]);

    setInBasketFlag([...inBasketFlag, {id: id, flag: true}] );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/neoflexTest" element={<MainPage basketData={basketData} />}>
            <Route index element={<Catalog handler={basketHadler} inBasketFlag = {inBasketFlag}  deleteBasket={removeBasketItems}/>} />
            <Route
              path="/neoflexTest/basket"
              element={
                <Basket
                  basketItems={basketData}
                  removeHandler={removeBasketItems}
                  countProducts={countProducts}
                  countHandler={countProductsHandler}
                  resultSum={sum}
                />
              }
            />
            <Route
              path="/neoflexTest/order"
              element={
               <div style={{minHeight: " calc(100vh - 230px)"}}>Оформление</div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
