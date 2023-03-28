import React from "react";
import "./user.css";
import { useQuery } from "@apollo/client";
import { getAllUserQuery } from "./user.query";
import {
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

const UsersPage = () => {
  const { loading, error, data } = useQuery(getAllUserQuery);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Users</h1>
      <div className="header">
        <span className="spanBelowHeader">List all users</span>
        <Button variant="outlined" onClick={handleOpen}>
          Create new user
        </Button>
      </div>

      <TableContainer component={Paper} className="tableContainer">
        <Table sx={{ minWidth: "300px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={50}>Avatar</TableCell>
              <TableCell>name</TableCell>
              <TableCell>username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.users.data.map((user: any) => (
              <TableRow key={user.username}>
                <TableCell>
                  <img src={user.avatar} className="avatar" alt="user avatar" />
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CreateUserModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default UsersPage;
