import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import PASSWORD_IMAGE from "../../assets/password.png";
import styles from "./navbar.module.scss";
import Divider from "@mui/material/Divider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const cookie = Cookies.get("userId");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogOut = () => {
    Cookies.remove("userId");
    navigate("/");
  };

  useEffect(() => {
    if (cookie) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [cookie]);

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
        <div onClick={handleLogOut} style={{ cursor: "pointer" }}>
          {isLogged ? (
            <div>
              <span>Logout </span> <LogoutIcon />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
