import React from "react";
import { Button } from "@mui/material";
import styles from "../style.module.scss";

function AllItems({
  setFavouriteSelected,
  setLoginSelected,
  setCardSelected,
  setAllSelected,
  setBinSelected,
}) {
  return (
    <div className={`${styles["items-container"]}`}>
      <Button
        //  onClick={() => handleCreateUser()}
        className={`${styles["btn-items"]}`}
        variant="contained"
        onClick={() => {
          setLoginSelected(true);
          setCardSelected(false);
          setFavouriteSelected(false);
          setAllSelected(false);
          setBinSelected(false);
        }}
      >
        LOGIN
      </Button>
      <Button
        //  onClick={() => handleCreateUser()}
        className={`${styles["btn-items"]}`}
        variant="contained"
        onClick={() => {
          setLoginSelected(false);
          setCardSelected(true);
          setFavouriteSelected(false);
          setAllSelected(false);
          setBinSelected(false);
        }}
      >
        CARD
      </Button>
      <Button
        //  onClick={() => handleCreateUser()}
        className={`${styles["btn-items"]}`}
        variant="contained"
        onClick={() => {
          setLoginSelected(false);
          setCardSelected(false);
          setFavouriteSelected(true);
          setAllSelected(false);
          setBinSelected(false);
        }}
      >
        FAVOURITE
      </Button>
    </div>
  );
}

export default AllItems;
