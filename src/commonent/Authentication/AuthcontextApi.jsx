import { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "../Productpage/ProductZoom";
import { IoCloseOutline } from "react-icons/io5";
import ProductDetalseComponent from "../Productpage/ProductDetalseComponent";

import { AiOutlineClose } from "react-icons/ai";

import { Drawer } from "@mui/material";
import Cartpanle from "../Productpage/Productslider/Cartpanle";
export const AuthContext = createContext(null);

const AuthcontextApi = ({ children }) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [open, setOpen] = useState(false);
  const [Cardpanelopne, setCardPanelopen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const autinfo = {
    setOpen,
    setCardPanelopen,
  };

  const toggleDrawer = (newOpen) => () => {
    setCardPanelopen(newOpen);
  };
  return (
    <>
      <AuthContext.Provider value={autinfo}>{children}</AuthContext.Provider>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="ProductDetalsemodale"
      >
        <DialogContent>
          <div className="flex items-center w-full relative">
            <Button
              onClick={handleClose}
              className="!w-[40px] !min-w-[40px] !h-[40px] !rounded-full !text-red-700 !absolute !top-0 !right-0"
            >
              <IoCloseOutline className="text-2xl" />
            </Button>
            <div className="col1 w-[40%] productdetelscontainer">
              <ProductZoom />
            </div>
            <div className="col1 w-[60%] productdetelscontainer px-5">
              <ProductDetalseComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Drawer anchor="right" open={Cardpanelopne} onClose={toggleDrawer(false)}>
        <div className="px-5 py-5 w-[400px]">
          <div className="flex items-center justify-between border-b-2 pb-3 mb-5 border-[rgba(0,0,0,0.1)]">
            <h1 className="text-xl font-semibold">Shopping Cart (1)</h1>
            <AiOutlineClose
              onClick={toggleDrawer(false)}
              className="text-2xl font-bold text-red-500 cursor-pointer"
            />
          </div>
          <Cartpanle />
        </div>
      </Drawer>
    </>
  );
};

export default AuthcontextApi;
