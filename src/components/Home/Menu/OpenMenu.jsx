import React from "react";
import { Link } from "react-router-dom";
import "./OpenMenu.modul.scss";
import menuClose from "../../../assets/img/menu-close.svg";
import Winmodal from "../Winmodal/Winmodal";
import youtube from "../../../assets/img/youtube-icons.svg";
import vk from "../../../assets/img/vk-icons.svg";
import tg from "../../../assets/img/tg-icons.svg";
import { useSelector, useDispatch } from "react-redux";
import { setNav } from "../../Redux/menuSlice";
import { handleOpen } from "../../Redux/modalSlice";

export default function OpenMenu() {
  const nav = useSelector((state) => state.menuSlice.nav);
  const dispatch = useDispatch();
  return (
    <div className={nav ? "openMenu-inner-open" : "openMenu-inner"}>
      <img
        src={menuClose}
        alt="close"
        style={{ marginTop: "30px", cursor: "pointer" }}
        onClick={() => dispatch(setNav(!nav))}
      />
      <ul className="menu-nav">
        <li>
          <Link
            className="menu-nav__link"
            to="/menu"
            onClick={() => dispatch(setNav(!nav))}
          >
            Меню
          </Link>
        </li>
        <li>
          <Link
            className="menu-nav__link"
            to="/delivery"
            onClick={() => dispatch(setNav(!nav))}
          >
            Доставка
          </Link>
        </li>
        <li>
          <Link
            className="menu-nav__link"
            to="/basket"
            onClick={() => dispatch(setNav(!nav))}
          >
            Корзина
          </Link>
        </li>
        <li>
          <Link
            className="menu-nav__link"
            onClick={() => dispatch(handleOpen())}
          >
            Бронь столика
          </Link>
          <Winmodal />
        </li>
      </ul>
      <ul className="menu-link">
        <li>
          <Link to="https://www.youtube.com/">
            <img src={youtube} alt="youtube-icon" />
          </Link>
        </li>
        <li>
          <Link to="https://vk.com/">
            <img src={vk} alt="vk-icon" />
          </Link>
        </li>
        <li>
          <Link to="https://web.telegram.org/">
            <img src={tg} alt="tg-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
