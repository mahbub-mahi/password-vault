import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import styles from "./style.module.scss";
import { createUser } from "../../api/api";
import Swal from "sweetalert2";

function CreateUserPage() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleCreateUser = async () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (userData.email && !emailRegex.test(userData.email)) {
      setEmailError("invalid email");
    } else {
      if ((userData.username && userData.email && userData.password) !== "") {
        if (
          (emailError && passwordError && confirmPassError && nameError) === ""
        ) {
          createUser(userData).then((res) => {
            if (res.success) {
              window.location.href = `/vault`;
            } else {
              setNameError(res.msg);
            }
          });
        } else {
          Swal.fire("Opss!", "Something went wrong!", "error");
        }
      } else {
        Swal.fire("", "Fill up all the fields!", "warning");
      }
    }
  };

  const onEmailChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setEmailError("Email is empty");
    } else {
      setEmailError("");
      setUserData({
        ...userData,
        email: e.target.value,
      });
    }
  };
  const onNameChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setNameError("Name is empty");
    } else {
      setNameError("");
      setUserData({
        ...userData,
        username: e.target.value,
      });
    }
  };
  const onPasswordChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setPasswordError("Password is empty");
    } else if (value.length < 6) {
      setPasswordError("Must contain 6 characters");
    } else if (/[A-Z]/.test(value) === false) {
      setPasswordError("Must contain Uppercase");
    } else if (/[a-z]/.test(value) === false) {
      setPasswordError("Must contain lowercase");
    } else {
      setPasswordError("");
      setUserData({
        ...userData,
        password: e.target.value,
      });
    }
  };
  const onPasswordConfirmChange = (e) => {
    if (userData.password !== e.target.value) {
      setConfirmPassError(`Password Doesn't match with master passeword`);
    } else {
      setConfirmPassError("");
      setUserData({
        ...userData,
        confirmPassword: e.target.value,
      });
    }
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
            <p
              style={{ marginBottom: "10px", marginLeft: "3px", color: "red" }}
            >
              {emailError}
            </p>
          </FormControl>

          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onNameChange(e)}
              id="outlined"
              label="Name"
              type="text"
            />
            <p
              style={{ marginBottom: "10px", marginLeft: "3px", color: "red" }}
            >
              {nameError}
            </p>
          </FormControl>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onPasswordChange(e)}
              label="Master-Password"
              id="outlined"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <p
              style={{ marginBottom: "10px", marginLeft: "3px", color: "red" }}
            >
              {passwordError}
            </p>
          </FormControl>
          <FormControl className={`${styles["input-form"]}`} fullWidth>
            <TextField
              onChange={(e) => onPasswordConfirmChange(e)}
              label="Re type Master-Password"
              id="outlined"
            />
            <p
              style={{ marginBottom: "10px", marginLeft: "3px", color: "red" }}
            >
              {confirmPassError}
            </p>
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
