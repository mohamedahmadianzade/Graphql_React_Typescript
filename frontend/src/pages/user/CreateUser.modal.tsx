import { useMutation } from "@apollo/client";
import { Modal, Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { createUserQuery } from "./user.query";
import Alert from "@mui/material/Alert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
const CreateUserModal = ({
  handleClose,
  open,
  loadUsers,
  showMessage,
}: {
  handleClose: any;
  loadUsers: any;
  showMessage: any;
  open: boolean;
}) => {
  const [createUserMutation, { loading, error }] = useMutation(createUserQuery);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleCreateUser = () => {
    if (!username) {
      showMessage("please enter a username");
      return;
    }
    if (!password) {
      showMessage("please enter a password");
      return;
    }
    if (!name) {
      showMessage("please enter a name");
      return;
    }
    createUserMutation({
      variables: {
        user: {
          name,
          password,
          username,
        },
      },
      onCompleted: (data) => {
        const success = data.addUser.success;
        showMessage(
          success
            ? "user created successfully"
            : "error creating user : " + data.addUser.message
        );
        if (success) {
          setName("");
          setPassword("");
          setUsername("");
          loadUsers();
        }

        handleClose();
      },
    });
  };

  if (loading) return <Alert severity="info">Creating new user</Alert>;
  if (error)
    return (
      <Alert severity="error">
        `Creation user with error! ${error.message}`
      </Alert>
    );
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PersonAddAltIcon />
              <b>User creation form</b>
            </Box>
            <TextField
              required
              label="username"
              placeholder="your username"
              variant="standard"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <TextField
              required
              label="password"
              type="password"
              variant="standard"
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              required
              label="full name"
              variant="standard"
              placeholder="your full name "
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Button variant="contained" onClick={handleCreateUser}>
              <AddTaskIcon style={{ paddingRight: 10 }} />
              create new user
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CreateUserModal;

const styles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
