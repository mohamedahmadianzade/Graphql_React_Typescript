import React from "react";
import { Outlet } from "react-router-dom";
import ApplicationBar from "../components/Appbar.component";
import SideBar from "../components/Sidebar.component";
import Box from "@mui/material/Box";

const MainPage = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <ApplicationBar setShowMenu={setShowMenu} />
      <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Box sx={{ paddingTop: 1, paddingLeft: 20, paddingRight: 20 }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default MainPage;
