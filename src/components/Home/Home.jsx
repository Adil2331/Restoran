import React from "react";
import { Link } from "react-router-dom";
import "./Home.modul.scss";
import Menu from "./Menu/Menu";
import main from "../../assets/img/main.png";
import bar from "../../assets/img/bar.png";
import Footer from "./Footer/Footer";
import Order from "./Order/Order";
// import Winmodal from "./Winmodal/Winmodal";
import Winmodal from "./Winmodal/Winmodal";
import OpenMenu from "./Menu/OpenMenu";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../Redux/modalSlice";

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSlice.theme);

  return (
    <div className={theme ? "light" : "black"}>
      <OpenMenu />

      <div className="header">
        <Menu />
        <div className="header__inner">
          <ul className="header__nav">
            <li>
              <Link to="/menu" className="nav__link">
                Меню
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="nav__link">
                Доставка
              </Link>
            </li>
            <li>
              <Link to="/basket" className="nav__link">
                Корзина
              </Link>
            </li>
            <li>
              <Link
                className="nav__link"
                onClick={() => dispatch(handleOpen())}
              >
                Бронь столика
              </Link>
              <Winmodal />
            </li>
          </ul>
          <h1>
            Видовой ресторан Food Exxe Relo <br /> на Крестовском острове
          </h1>
        </div>
      </div>

      <section className="about container">
        <h3 className="subtitle about__subtitle">о ресторане</h3>
        <div className="inner">
          <h2 className="title">Food Exxe Relo</h2>
          <ul className="menu">
            <li className="items">
              <p className="text">
                Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
                lectus phasellus non ornare eget velit. Facilisi urna, tristique
                dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
                pulvinar sit volutpat nulla vestibulum.
              </p>
            </li>
            <li className="items">
              <p className="text-2">
                Morbi pellentesque enim massa laoreet vel id. Lectus ac,
                facilisis neque turpis. Morbi massa enim nullam sem vehicula.
                Amet quis pellentesque enim porttitor lectus interdum. Nisi,
                faucibus pharetra at porttitor. Fringilla luctus pretium in
                viverra. In adipiscing tempor amet malesuada ullamcorper ut
                sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at
                quis in eu, faucibus feugiat vel. At.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="menu container">
        <h3 className="subtitle menu__subtitle">меню</h3>
        <div className="inner">
          <h2 className="title">Меню</h2>
          <ul className="menu">
            <li className="items">
              <p className="text">
                At faucibus nullam mauris vitae ut non. Augue libero non nibh
                nec, et eget erat. Nascetur nunc neque, varius massa aliquam
                interdum turpis massa. Ac tortor aliquam risus, interdum nisl
                mauris sit. Ut placerat fermentum pellentesque ac at. Vitae
                venenatis faucibus urna mi eget vitae quam eu. Euismod sed
                mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
              </p>
            </li>
            <li className="items">
              <p className="text-2">
                Nunc cras cras aliquet blandit faucibus massa sagittis semper.
              </p>
            </li>
          </ul>
        </div>
        <ul className="menu__nav">
          <li className="menu__item">
            <img className="menu__img" src={main} alt="main-menu" />
            <p className="menu__text menu__text-1">Основное меню</p>
          </li>
          <li className="menu__item">
            <img className="menu__img" src={bar} alt="main-menu" />
            <p className="menu__text menu__text-2">Барная карта</p>
          </li>
        </ul>
      </section>

      <section className="delivery container">
        <h3 className="subtitle delivery__subtitle">доставка</h3>
        <div className="inner">
          <h2 className="title">Служба доставки</h2>
          <ul className="menu">
            <li className="items">
              <p className="text">
                Phasellus diam, ultrices lobortis integer et. Diam, purus vel
                sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
                orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem.
                Et in vitae pellentesque non, lectus orci natoque faucibus
                suspendisse. Semper aliquam id et ultrices velit donec lacus. In
                odio sit nibh volutpat cras placerat sit feugiat dignissim.
                Rutrum et suspendisse tortor, lobortis eleifend in fringilla.
                Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit
                nam enim semper porttitor imperdiet diam semper. Nulla sit etiam
                cras morbi enim elementum euismod sapien.
              </p>
            </li>
            <li className="items items-2">
              <Link to="/delivery" className="delivery__link">
                Подробнее
              </Link>
              <Link className="delivery__link">Условия доставки</Link>
            </li>
          </ul>
        </div>
      </section>

      <Order />
      <Footer />
    </div>
  );
}
