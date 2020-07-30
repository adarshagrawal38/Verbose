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
class Register extends Component {
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
          <Typography variant="h5">Register</Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
            variant="outlined"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            color="secondary"
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
          />
          <TextField
            id="name"
            label="Resturant Name"
            type="text"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
            variant="outlined"
          />
          <TextField
            id="address"
            label="Address"
            type="text"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
            variant="outlined"
          />
          <br />
          <br />

          <CircularProgress size={24} thickness={4} color="secondary" />
          <br />
          <br />
          <Link to="/dashboard">
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

export default Register;
