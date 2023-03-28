import React from "react";
import { Outlet } from "react-router-dom";
import ApplicationBar from "../components/Appbar.component";
import SideBar from "../components/Sidebar.component";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import AppSlice, {
  selectDialogText,
  selectShowDialog,
} from "../state/slice/app.slice";

const MainPage = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const dispatch = useDispatch();
  const showDialog = useSelector(selectShowDialog);
  const dialogMessge = useSelector(selectDialogText);

  return (
    <div>
      <ApplicationBar setShowMenu={setShowMenu} />
      <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Box sx={{ paddingTop: 1, paddingLeft: 20, paddingRight: 20 }}>
        <Outlet />
      </Box>
      <Snackbar
        open={showDialog}
        autoHideDuration={2000}
        onClose={() => dispatch(AppSlice.actions.hideMessage())}
        message={dialogMessge}
      />
    </div>
  );
};

export default MainPage;
