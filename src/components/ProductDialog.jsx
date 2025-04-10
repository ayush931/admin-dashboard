import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { forwardRef, useContext } from "react";
import { Button } from "@mui/material";
import AddProducts from "../pages/AddProducts";
import AddHomeSlide from "../pages/AddHomeSlide";
import AddCategory from "../pages/AddCategory";
import AddSubCategory from "../pages/AddSubCategory";
import { MyContext } from "../App";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductDialog() {
  const context = useContext(MyContext);

  const handleClose = () => {
    context.setIsOpenFullSCreenPanel({
      open: false,
      model: "Add Products",
    });
  };

  console.log(context.isOpenFullScreenPanel?.model);
  return (
    <Dialog
      fullScreen
      open={context.isOpenFullScreenPanel.open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }} className="!bg-primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {context.isOpenFullScreenPanel?.model}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      {context.isOpenFullScreenPanel?.model === "Add Products" && (
        <AddProducts />
      )}
      {context.isOpenFullScreenPanel?.model === "Add Home Slide" && (
        <AddHomeSlide />
      )}
      {context.isOpenFullScreenPanel?.model === "Add New Category" && (
        <AddCategory />
      )}
      {context.isOpenFullScreenPanel?.model === "Add New Sub Category" && (
        <AddSubCategory />
      )}
    </Dialog>
  );
}

export default ProductDialog;
