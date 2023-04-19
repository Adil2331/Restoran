import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OpenMenu from "../Home/Menu/OpenMenu";
import Menu from "../Home/Menu/Menu";
import { Link } from "react-router-dom";
import "./Basket.modul.scss";
import {
  setReset,
  setCountPlus,
  setCountMinus,
  setRemove,
  // setBuy,
} from "../Redux/basketSlice";
import Footer from "../Home/Footer/Footer";
import BasketModal from "./BasketModal";

function Basket() {
  const [open, setOpen] = useState(false);

  const theme = useSelector((state) => state.themeSlice.theme);
  const basket = useSelector((state) => state.basketSlice.basket);
  // const buy = useSelector((state) => state.basketSlice.buy);
  const dispatch = useDispatch();
  const onClear = (id) => {
    if (window.confirm("Убрать блюдо из корзины?")) {
      dispatch(setRemove(id));
    }
  };

  const toggleClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(setReset());
      // dispatch(setBuy());
    }
  };
  const totalPrice = basket.reduce(
    (sum, e) => sum + Number(e.price) * Number(e.count),
    0
  );
  // console.log("basket", basket);
  // console.log(
  //   "totalPrice",
  //   basket.reduce((sum, e) => Number(e.price) * Number(e.count) + sum, 0)
  // );
  // console.log("buy", buy);
  return (
    <div className={theme ? "light" : "black"}>
      <OpenMenu />
      <div className="basket">
        <Menu />
        <div className="basket__header">
          <ul className="basket-nav">
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/menu">Меню</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка</Link>
            </li>
          </ul>
          <div className="basket__inner">
            <h3>Корзина</h3>
            <div className="basket__inner-items">
              {basket.map((element, i) => (
                <ul
                  key={i}
                  style={
                    theme === false
                      ? { border: "1px solid white" }
                      : { border: "1px solid black" }
                  }
                >
                  <img
                    src={require(`../../assets/Food-img/${element.img}`)}
                    alt="sa"
                  />

                  <li style={{ textAlign: "center", maxWidth: "200px" }}>
                    <h4>{element.title}</h4>
                  </li>
                  <ul>
                    <p>{element.price * element.count} ₽</p>
                    <li style={{ padding: 5 }}>
                      <button
                        onClick={() => dispatch(setCountPlus(element.id))}
                      >
                        +
                      </button>
                      <span>{element.count}</span>
                      <button
                        onClick={() =>
                          element.count > 1
                            ? dispatch(setCountMinus(element.id))
                            : onClear(element.id)
                        }
                      >
                        -
                      </button>
                    </li>
                  </ul>
                </ul>
              ))}
            </div>
          </div>
          {totalPrice <= 0 ? (
            <span
              style={{
                textAlign: "center",
                marginBottom: "60px",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Корзина пуста
            </span>
          ) : (
            <span
              style={{
                textAlign: "center",
                marginBottom: "60px",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Общая сумма: {totalPrice} ₽
            </span>
          )}
          {/* )} */}
          <div className="basket__bottom">
            <button onClick={() => setOpen(true)}>Создать заказ</button>
            <BasketModal
              open={open}
              setOpen={setOpen}
              totalPrice={totalPrice}
            />
            <button onClick={() => toggleClear()}>Очистить корзину</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Basket;
