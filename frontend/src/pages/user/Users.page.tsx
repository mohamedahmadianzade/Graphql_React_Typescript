import React, { useState, useEffect } from "react";
import "./user.css";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  deleteAllUsersQuery,
  getAllUserQuery,
  deleteUserQuery,
} from "./user.query";
import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";
import CreateUserModal from "./CreateUser.modal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Badge from "@mui/material/Badge/Badge";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useDispatch } from "react-redux/es/exports";
import AppSlice from "../../state/slice/app.slice";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [loadUsers, { error, data }] = useLazyQuery(getAllUserQuery, {
    fetchPolicy: "network-only",
  });

  const [deleteUsers] = useMutation(deleteAllUsersQuery);
  const [deleteUser] = useMutation(deleteUserQuery);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReload = () => {
    loadUsers();
    dispatch(AppSlice.actions.showMessage("All users loaded successfully"));
  };

  const handleDeletAll = () => {
    deleteUsers({
      onCompleted: (data) => {
        dispatch(AppSlice.actions.showMessage(data.deleteAllUsers.message));
        loadUsers();
      },
    });
  };

  const handleDelete = (username: string) => {
    deleteUser({
      variables: {
        username,
      },
      onCompleted: (data) => {
        dispatch(AppSlice.actions.showMessage(data.deleteUser.message));
        loadUsers();
      },
    });
  };

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Users</h1>
      <div className="header">
        <span className="spanBelowHeader">
          <Badge
            badgeContent={data?.users.data.length}
            color="primary"
            sx={{ marginRight: 1 }}
          >
            <SupervisedUserCircleIcon color="action" />
          </Badge>
          List all users
        </span>
        <Button variant="outlined" onClick={handleOpen}>
          Create new user
        </Button>
        <Button variant="outlined" onClick={handleReload}>
          Reload All users
        </Button>
        <Button variant="outlined" onClick={handleDeletAll} color="error">
          Cleaer All users
        </Button>
      </div>

      {data && data.users.data.length !== 0 && (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "300px" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width={50}>Avatar</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>username</TableCell>
                  <TableCell width={30}>action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.users.data.map((user: any) => (
                  <TableRow key={user.username}>
                    <TableCell>
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          className="avatar"
                          alt="user avatar"
                        />
                      ) : (
                        <AccountCircleIcon sx={{ fontSize: 75 }} />
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>
                      <DeleteForeverIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleDelete(user.username)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {!(data && data.users.data.length !== 0) && (
        <Alert severity="info">There is no user to show in the list</Alert>
      )}
      <CreateUserModal
        open={open}
        handleClose={handleClose}
        loadUsers={loadUsers}
      />
    </div>
  );
};

export default UsersPage;
