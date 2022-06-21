import React from "react";
import css from "./App.module.css";
import img from "./images/Nike.jpg";
import { useState } from "react";

function App() {
  const [btn, setBtn] = useState(false);
  const [window, setWindow] = useState(true);

  const handleText = () => {
    if (!btn) {
      setBtn(true);
    }
  };
  const handleRemove = () => {
    setBtn(false);
  };

  const handleWindow = () => {
    if (window) {
      setWindow(false);
    }
  };
  const handleRemoveWindow = () => {
    setWindow(true);
  };

  return (
    <div className={css.products_container}>
      <div className={css.image}>
        <img src={img} alt="" />
      </div>
      <div className={css.container}>
        <div className={css.products}>
          <div className={css.products_name}>
            <div className={css.name}>Nike Sneaker</div>
            <div className={css.price}>120$</div>
          </div>
          <button onClick={handleWindow} className={css.btn}>
            Детали
          </button>
          {!window && (
            <div className={css.window_item}>
              <button onClick={handleRemoveWindow} className={css.window_btn}>
                x
              </button>
              <div className={css.window_text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.Animi,
                dignissimos.
              </div>
            </div>
          )}
        </div>
        <hr></hr>
        <div className={css.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.Animi,
          dignissimos.
        </div>
        <div className={css.item}>
          <button disabled={btn} onClick={handleText} className={css.cart_btn}>
            {!btn ? "Добавить в корзину" : "Уже в корзине"}
          </button>
          {btn && (
            <button className={css.btn_item} onClick={handleRemove}>
              Удалить из корзины
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
