import React from "react";
import img from "../../../assets/img/menu-logo.svg";
import youtube from "../../../assets/img/youtube-icons.svg";
import vk from "../../../assets/img/vk-icons.svg";
import tg from "../../../assets/img/tg-icons.svg";
import "./Menu.modul.scss";
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "./../../Redux/menuSlice";
import { setTheme } from "./../../Redux/themeSlice";
import { Link } from "react-router-dom";
import IconSun from "../../../assets/icons/IconSun";
import IconMoon from "../../../assets/icons/IconMoon";

function Menu() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSlice.theme);
  // const [theme, setTheme] = React.useState("theme1");

  // const toggleTheme = () => {
  //   setTheme(theme === "theme1" ? "theme2" : "theme1");
  // };

  // React.useEffect(() => {
  //   const backgroundColor = `var(--background-color-${theme})`;
  //   const fontColor = `var(--font-color-${theme})`;

  //   document.body.style.setProperty("--background-color", backgroundColor);
  //   document.body.style.setProperty("--font-color", fontColor);
  // }, [theme]);
  return (
    <div className="root">
      <Link>
        <img onClick={() => dispatch(setNav())} src={img} alt="menu-icon" />
      </Link>
      <ul>
        <li
          className="hover_svg"
          style={{ cursor: "pointer", width: "40" }}
          onClick={() => dispatch(setTheme())}
        >
          {theme ? <IconSun /> : <IconMoon />}
        </li>
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

export default Menu;
