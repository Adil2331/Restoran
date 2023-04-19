import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OpenMenu from "../Home/Menu/OpenMenu";
import Menu from "../Home/Menu/Menu";
import { Link } from "react-router-dom";
import "./Delivery.modul.scss";
import { useDispatch } from "react-redux";
import { filteredDeliverySelector, setDelivery } from "../Redux/testSlice";
import Footer from "../Home/Footer/Footer";

function Delivery() {
  const theme = useSelector((state) => state.themeSlice.theme);
  const data = useSelector(filteredDeliverySelector);
  const dispatch = useDispatch();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, [time]);
  console.log("data", data);
  return (
    <div className={theme ? "light" : "black"}>
      <OpenMenu />
      <div className="delivery-header">
        <Menu />
        <div className="delivery__inner">
          <ul className="delivery-nav">
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/menu">Меню</Link>
            </li>
            <li>
              <Link to="/basket">Корзина</Link>
            </li>
          </ul>
          <div className="about__delivery">
            {data.length < 1 ? (
              <h3>Нету текущих заказов</h3>
            ) : (
              <div>
                <h3>Заказ в пути</h3>
                {data.map((e, i) => {
                  const current = new Date();
                  const diff = current.getTime() - Number(e.createTime);
                  const date = `${new Date(e.createTime).getDate()}/${
                    new Date(e.createTime).getMonth() + 1
                  }/${new Date(e.createTime).getFullYear()}  ${new Date(
                    e.createTime
                  ).getHours()}:${new Date(e.createTime).getMinutes()}`;
                  const thirtyMinutesInMilliseconds = 5 * 60 * 1000;
                  const thirdMin = new Date(thirtyMinutesInMilliseconds);
                  const timeLeft =
                    new Date(thirdMin).getMinutes() -
                    new Date(diff).getMinutes();
                  const timeLeftSec =
                    new Date(thirdMin).getSeconds() -
                    new Date(diff).getSeconds();
                  if (timeLeft <= 0) {
                    dispatch(setDelivery(e.createTime));
                  }
                  return (
                    <div key={i} className="delivery__inner-items">
                      <p>Заказ был создан {date}</p>
                      <p>Осталось времяни: ~{timeLeft} мин</p>
                      <p>
                        Заказ на адрес {e.text1} будет доставлен через 30 минут
                      </p>

                      {e.basket.map((element) => (
                        <ul
                          key={element.title}
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

                          <li
                            style={{ textAlign: "center", maxWidth: "200px" }}
                          >
                            <h4>{element.title}</h4>
                          </li>
                          <ul>
                            <p>
                              {element.price} ₽, количество {element.count}{" "}
                            </p>
                          </ul>
                        </ul>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Delivery;
