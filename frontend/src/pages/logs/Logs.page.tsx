import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteAllLogsQuery, getAllLogsQuery } from "./log.query";
import "./log.css";
import Button from "@mui/material/Button";

const LogsPage = () => {
  const [loadLogs, { error, data }] = useLazyQuery(getAllLogsQuery, {
    fetchPolicy: "network-only",
  });

  const [deleteLogs] = useMutation(deleteAllLogsQuery);

  const handleDeletAll = () => {
    deleteLogs({
      onCompleted: (data) => {
        loadLogs();
      },
    });
  };

  useEffect(() => {
    loadLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Logs</h1>
      <div className="header">
        <span className="spanBelowHeader">List all logs</span>
        <Button variant="outlined" onClick={handleDeletAll} color="error">
          Cleaer All logs
        </Button>
      </div>
      <TableContainer component={Paper} className="tableContainer">
        <Table sx={{ minWidth: "300px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={10}></TableCell>
              <TableCell width={50}>user</TableCell>
              <TableCell width={150}>date</TableCell>
              <TableCell>description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.logs.data.map((log: any) => (
              <TableRow key={log.date}>
                <TableCell>
                  {log.user?.avatar ? (
                    <img
                      src={log.user?.avatar}
                      className="logavatar"
                      alt="avatar"
                    />
                  ) : (
                    <AccountCircleIcon sx={{ fontSize: 25 }} />
                  )}
                </TableCell>
                <TableCell>{log.user?.username}</TableCell>
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
