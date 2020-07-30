import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
class LogIn extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Box
          bgcolor=""
          textAlig="center"
          p="24px"
          mt="50px"
          boxShadow="2"
          borderRadius="15px"
        >
          <Typography variant="h5">Login</Typography>
          <TextField
            id="outlined-error-helper-text"
            label="Email"
            type="email"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
            variant="outlined"
          />
          <TextField
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            color="secondary"
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
          />
          <br />
          <br />

          <CircularProgress size={24} thickness={4} color="secondary" />
          <br />
          <br />
          <Button
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <br />
          <br />
          <Link to="/register">
            <Button
              disableElevation
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Link>
        </Box>
      </Container>
    );
  }
}

export default LogIn;
