import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { loginUser } from "../../api/create";

function Login(props) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLoginUser = () => {
    loginUser(loginData).then((res) => {
      if (res) {
        navigate(`/vault?${res.username}`, {
          search: { name: res.username },
          state: { name: res.username },
        });
        //   props.history.push(`/vault?${res.password}`);
      }
    });
  };

  return (
    <>
      <div className={`${styles["login-container"]}`}>
        <section>
          <h2 className={`${styles["header"]}`}>Login</h2>

          <div className={`${styles["create-form"]}`}>
            <FormControl className={`${styles["input-form"]}`} fullWidth>
              <TextField
                onChange={(e) => onEmailChange(e)}
                id="outlined"
                label="E-mail Address"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => onPasswordChange(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div>
            <Button
              onClick={() => handleLoginUser()}
              className={`${styles["btn-create"]}`}
              variant="contained"
            >
              Continue
            </Button>
          </div>

          <div className={`${styles["btn-login-container"]}`}>
            <span>New Here? </span>
            <Button href="/create" className={`${styles["btn-login"]}`}>
              Create new account
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
