import { useQuery } from "@apollo/client";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { getAllLogsQuery } from "./log.query";
import "./log.css";
const LogsPage = () => {
  const { loading, error, data } = useQuery(getAllLogsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Logs</h1>
      <span className="spanBelowHeader">List all users' logs</span>
      <TableContainer component={Paper} className="tableContainer">
        <Table sx={{ minWidth: "300px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={10}></TableCell>
              <TableCell width={50}>user</TableCell>
              <TableCell>date</TableCell>
              <TableCell>description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.logs.data.map((log: any) => (
              <TableRow key={log.id}>
                <TableCell>
                  <img
                    src={log.user.avatar}
                    className="logavatar"
                    alt="avatar"
                  />
                </TableCell>
                <TableCell>{log.user.username}</TableCell>
                <TableCell component="th" scope="row">
                  {log.date}
                </TableCell>
                <TableCell>{log.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LogsPage;
