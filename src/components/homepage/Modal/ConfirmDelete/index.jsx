import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import {
  Divider,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Modal,
  Fade,
  TextField,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";

const ConfirmDelete = ({
  openConfirmDeleteModal,
  handleDeleteData,
  setOpenConfirmDeleteModal,
  user,
}) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openConfirmDeleteModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ zIndex: "1000" }}
      >
        <div className={`${styles["modal"]}`}>
          <div className={`${styles["modal--header"]}`}>
            <h4>This Action will delete the item permanently</h4>
            <h4>Are you sure?</h4>
            <CloseIcon
              className={`${styles["modal-close-icon"]}`}
              onClick={() => setOpenConfirmDeleteModal(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Divider />
          <div className={`${styles["confirm-container"]}`}>
            <Button
              variant="contained"
              onClick={() => {
                handleDeleteData(user);
                setOpenConfirmDeleteModal(false);
              }}
              className={`${styles["save-container"]}`}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenConfirmDeleteModal(false)}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmDelete;
