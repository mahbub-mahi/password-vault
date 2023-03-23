import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import styles from "./style.module.scss";
import { createUser } from "../../api/api";

function CreateUserPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleCreateUser = async () => {
    const emailRegex =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;

    const isValid = emailRegex.test(userData.email);
    if (isValid) {
      setEmailError("");
      createUser(userData).then((res) => {
        if (res) {
          window.location.href = `/vault`;
        }
      });
    } else {
      setEmailError("Invaid email");
    }
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
        <p style={{ marginBottom: "10px", marginLeft: "3px", color: "red" }}>
          {emailError}
        </p>
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
