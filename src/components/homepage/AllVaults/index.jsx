import React from "react";
import { Button } from "@mui/material";
import styles from "../style.module.scss";

function AllValuts({
  setFavouriteSelected,
  setLoginSelected,
  setCardSelected,
  setAllSelected,
  setBinSelected,
}) {
  const handleAllSelection = () => {
    setFavouriteSelected(false);
    setLoginSelected(false);
    setCardSelected(false);
    setAllSelected(true);
    setBinSelected(false);
  };
  return (
    <div className={`${styles["items-container"]}`}>
      <Button
        onClick={() => handleAllSelection()}
        className={`${styles["btn-items"]}`}
        variant="contained"
      >
        MY VAULT
      </Button>
    </div>
  );
}

export default AllValuts;
