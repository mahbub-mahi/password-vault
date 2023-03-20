import React from "react";
import { Dropdown } from "react-bootstrap";
import PASSWORD_IMAGE from "../../assets/password.png";
import styles from "./navbar.module.scss";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <img
          loading="lazy"
          src={PASSWORD_IMAGE}
          alt="password-valut"
          width={70}
          height={70}
        />
        <h3>PASSWORD VAULT</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            NAME
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <span>Logged In as</span>
            <p>NAME</p>
            <Divider />

            <Dropdown.Item href="#/action-3">LOG OUT </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
