import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import styles from "./style.module.scss";

function CreateUserPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleCreateUser = () => {
    console.log(userData);
  };

  const onEmailChange = (e) => {
    setUserData({
      ...userData,
      email: e.target.value,
    });
  };
  const onNameChange = (e) => {
    setUserData({
      ...userData,
      username: e.target.value,
    });
  };
  const onPasswordChange = (e) => {
    setUserData({
      ...userData,
      password: e.target.value,
    });
  };
  const onPasswordConfirmChange = (e) => {
    setUserData({
      ...userData,
      confirmPassword: e.target.value,
    });
  };

  return (
    <div className={`${styles["create-container"]}`}>
      <section>
        <h2 className={`${styles["header"]}`}>Create Your Account</h2>

        <div className={`${styles["create-form"]}`}>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onEmailChange(e)}
              id="outlined"
              label="E-mail Address"
              type="text"
            />
          </FormControl>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onNameChange(e)}
              id="outlined"
              label="Name"
              type="text"
            />
          </FormControl>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onPasswordChange(e)}
              label="Master-Password"
              id="outlined"
            />
          </FormControl>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onPasswordConfirmChange(e)}
              label="Re type Master-Password"
              id="outlined"
            />
          </FormControl>
        </div>
        <div>
          <Button
            onClick={() => handleCreateUser()}
            className={`${styles["btn-create"]}`}
            variant="contained"
          >
            Create account
          </Button>
        </div>

        <div className={`${styles["btn-login-container"]}`}>
          Already Have an Account?
          <Button href="/" className={`${styles["btn-login"]}`}>
            Log in
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateUserPage;
