import React from "react";
import "./Order.modul.scss";
import order from "../../../assets/img/order.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleOpen } from "../../Redux/modalSlice";
import Winmodal from "../Winmodal/Winmodal";

export default function Order() {
  const dispatch = useDispatch();
  return (
    <section className="order container">
      <h3 className="subtitle order__subtitle">контакты</h3>
      <div className="order__inner">
        <div className="order__inner-time">
          <ul className="order__nav">
            <li className="order__item">
              <h4 className="order__title">2 мин</h4>
              <p className="order-text">
                из центра
                <br />
                Санкт-Петербурга
              </p>
            </li>
            <li className="order__item">
              <h4 className="order__title">12 мин</h4>
              <p className="order-text">
                из города
                <br />
                Зеленогорск
              </p>
            </li>
            <li className="order__item">
              <h4 className="order__title">42 мин</h4>
              <p className="order-text">
                из аэропорта
                <br />
                Пулково
              </p>
            </li>
            <li className="order__item">
              <h4 className="order__title">52 мин</h4>
              <p className="order-text">
                из города
                <br />
                Павловск
              </p>
            </li>
          </ul>
        </div>
        <>
          <div className="order__inner-con">
            <ul className="order__inner-list">
              <li className="order__inner-item">
                Санкт-Петербург, Северная дорога, 11
              </li>
              <li className="order__inner-item">
                <a href="tel:+79217777777">+7 (921) 777-77-77</a>
              </li>
            </ul>
            <h5 className="order__inner-title">Время работы</h5>
            <p className="order__inner-text ">Вск-Чт с 12:00 до 23:00</p>
            <p className="order__inner-text order__inner-text-2">
              Пт-Сб с 12:00 до 03:00
            </p>
            <div>
              <Link
                className="order__btn order__btn-br"
                onClick={() => dispatch(handleOpen())}
              >
                Бронь столика
              </Link>
              <Winmodal />
              <Link className="order__btn order__btn-qu">Задать вопрос</Link>
            </div>
          </div>
          <img src={order} alt="" className="order-img" />
        </>
      </div>
    </section>
  );
}
