import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Winmodal.modul.scss";
import close from "../../../assets/img/close.svg";
import logo from "../../../assets/img/footer-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../Redux/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 416,
  height: 572,
  bgcolor: "#333333",

  boxShadow: 24,
};

export default function Winmodal() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modalSlice.open);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch(handleClose())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={() => dispatch(handleClose())}
            sx={{ marginTop: 2, marginLeft: 43 }}
          >
            <img src={close} alt="close" />
          </Button>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="logo" />
          </Typography>
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "39.5px",
            }}
          >
            Забронировать столик
          </Typography>
          <input type="text" className="modal-input" placeholder="Имя"></input>
          <input
            type="tel"
            className="modal-input"
            placeholder="Телефон"
          ></input>
          <div className="modal-footer">
            <input type="number" placeholder="Гостей" />
            <input type="date" placeholder="Время" />
          </div>
          <button
            onClick={() => dispatch(handleClose())}
            className="footer-btn"
          >
            Забронировать
          </button>
        </Box>
      </Modal>
    </div>
  );
}
