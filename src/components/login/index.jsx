import React, { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./style.module.scss";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onPasswordChange = (e) => {
    setLoginData({ ...loginData, password: e.target.value });
  };
  return (
    <>
      <div className={`${styles["login-container"]}`}>
        <h2>LOGIN</h2>
        <div>
          <FormControl fullWidth>
            <TextField
              onChange={onEmailChange}
              id="outlined"
              label="E-mail Address"
              type="text"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={onPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" onClick={""}>
            Continue
          </Button>
          <div>
            <span>New Here? </span>
            <Button href="/create">Create Account</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
