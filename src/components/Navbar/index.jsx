import React, { useEffect, useState } from "react";
import PASSWORD_IMAGE from "../../assets/password.png";
import styles from "./navbar.module.scss";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "react-bootstrap";

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
          className={`${styles["icon-vault"]}`}
        />
        <h3>PASSWORD VAULT</h3>
        <div onClick={handleLogOut} className={`${styles["logout"]}`}>
          {isLogged ? (
            <Button className={`${styles["logout-container"]}`}>
              <span style={{ paddingRight: "10px" }}>Logout </span>{" "}
              <LogoutIcon />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
