import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Home/Menu/Menu";
import "./FoodMenu.modul.scss";
import items from "../../data/itmes";
import Order from "../Home/Order/Order";
import Footer from "../Home/Footer/Footer";
import OpenMenu from "../Home/Menu/OpenMenu";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setRemove } from "../Redux/basketSlice";

const sort = [
  "Завтраки ",
  "Raw",
  "Холодные закуски",
  "Брускетты ",
  "К вину ",
  "Салаты",
  "Супы",
  "Паста и ризотто ",
  "Мясо",
  "Рыба",
  "Grill",
  "Мангал",
  "Гарниры",
];

export default function FoodMenu() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSlice.theme);
  const basket = useSelector((state) => state.basketSlice.basket);
  // console.log("basket", basket);
  // useEffect(() => dispatch(setReset), []);
  return (
    <div className={theme ? "light" : "black"}>
      <OpenMenu />
      <div className="food-menu">
        <Menu></Menu>
        <div className="food-menu__inner">
          <ul className="food-nav">
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка</Link>
            </li>
            <li>
              <Link to="/basket">Корзина</Link>
            </li>
          </ul>
          <ul className="menu-sort">
            {sort.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <nav>
            <ul className="menu__food">
              {items.map((obj) => (
                <li key={obj.id}>
                  <img
                    src={require(`../../assets/Food-img/${obj.img}`)}
                    alt="sa"
                  />
                  <h4>{obj.title}</h4>
                  <div>
                    <p>{obj.price} ₽</p>
                    {!basket.filter((e) => e.id === obj.id).length ? (
                      <button
                        onClick={() =>
                          dispatch(
                            setBasket({
                              id: obj.id,
                              title: obj.title,
                              count: 1,
                              img: obj.img,
                              price: obj.price,
                            })
                          )
                        }
                      >
                        В корзину
                      </button>
                    ) : (
                      <button onClick={() => dispatch(setRemove(obj.id))}>
                        Убрать
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
}
