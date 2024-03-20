import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "./layout/MainPage";
import Catalog from "../src/layout/Catalog";
import Basket from "../src/components/Basket";
import jsonList from "./products.json";
import { useEffect } from "react";
function App() {
  const [basketData, setBasketData] = useState([]);
  const [countProducts, setCountProducts] = useState(0);

  let removeBasketItems = (id) => {
    console.log("прилетело на удаление", id);
    console.log("basketDataa", basketData);
    setBasketData(basketData.filter((item) => item[0].id !== +id));
    console.log(
      basketData.filter((item) => item[0].id === +id),
      "was removed"
    );
  };
  let basketHadler = (id) => {
    console.log("прилетело", id);
    basketData.every((list)=>list[0].id !== id) && setBasketData([...basketData, jsonList.filter((item) => item.id === +id)]);

    setCountProducts(basketData.length);
  };
  useEffect(() => {
    console.log("app render");
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<Catalog handler={basketHadler} />} />
              <Route
                path="/basket"
                element={
                  <Basket
                    basketItems={basketData}
                    removeHandler={removeBasketItems}
                    countProducts={countProducts}
                  />
                }
              />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
