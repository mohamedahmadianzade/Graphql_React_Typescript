import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FitbitOutlinedIcon from "@mui/icons-material/FitbitOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { NavLink } from "react-router-dom";

interface ISidebar {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({ showMenu, setShowMenu }: ISidebar) {
  return (
    <div>
      <Drawer
        anchor={"left"}
        open={showMenu}
        onClose={() => setShowMenu(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setShowMenu(false)}
        >
          <List>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItem key={"users"}>
                <ListItemButton>
                  <ListItemIcon>
                    <SupervisedUserCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Users"} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to="/logs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItem key={"logs"}>
                <ListItemButton>
                  <ListItemIcon>
                    <FitbitOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"logs"} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
