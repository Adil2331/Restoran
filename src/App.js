import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Basket from "./components/Basket/Basket";
import Delivery from "./components/ Delivery/Delivery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<FoodMenu />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}

export default App;
