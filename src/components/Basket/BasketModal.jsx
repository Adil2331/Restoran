import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import close from "../../assets/img/close.svg";
import { useSelector, useDispatch } from "react-redux";
// import { setBuy } from "../Redux/basketSlice";
// import { setItems } from "../Redux/deliverySlice";
import { setData } from "../Redux/testSlice";
import { setReset } from "../Redux/basketSlice";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  height: 400,
  bgcolor: "#333",
  color: "white",
  boxShadow: 24,
  p: 4,
};

export default function BasketModal({ open, setOpen, totalPrice }) {
  const theme = useSelector((state) => state.themeSlice.theme);
  // const items = useSelector((state) => state.deliverySlice.items);
  // const data = useSelector((state) => state.testSlice.data);
  const basket = useSelector((state) => state.basketSlice.basket);

  const dispatch = useDispatch();

  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  // console.log("items", items);
  // console.log("test", data);
  // console.log(text1, text2);
  const toggleOrder = () => {
    dispatch(
      setData({
        text1,
        text2,
        totalPrice,
        basket,
        createTime: new Date().getTime(),
        delivery: false,
      })
    );
    dispatch(setReset());
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme === true ? style : style1}>
          <button
            onClick={() => setOpen(false)}
            style={{
              border: "none",
              backgroundColor: "inherit",
              cursor: "pointer",
              marginLeft: "345px",
            }}
          >
            <img src={close} alt="" />
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Адрес доставки
          </Typography>
          <Input
            onChange={(event) => setText1(event.target.value)}
            className="input_dark"
            sx={{ width: "100%", mb: 2, mt: 2 }}
            placeholder="Укажите улицу"
          ></Input>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input placeholder="Подьезд"></Input>
            <Input placeholder="Квартира"></Input>
          </div>
          <Input
            onChange={(event) => setText2(event.target.value)}
            sx={{ width: "100%", mt: 2, mb: 2 }}
            placeholder="Комментарий к адресу"
          ></Input>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Способ оплаты
          </Typography>
          {/* <Input type="radio">Оплата картой</Input>
          <Input type="radio">Наличными курьеру</Input> */}

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {totalPrice} ₽
          </Typography>
          <button
            onClick={
              () => toggleOrder()
              // dispatch(
              //   setData({
              //     text1,
              //     text2,
              //     totalPrice,
              //     basket,
              //     createTime: new Date().getTime(),
              //     delivery: false,
              //   })
              // )
            }
            style={{
              border: "none",
              padding: "10px 20px",
              backgroundColor: "#b59571",
              color: "white",
              cursor: "pointer",
              marginLeft: "140px",
              marginTop: "20px",
            }}
          >
            Заказать
          </button>
        </Box>
      </Modal>
    </div>
  );
}
