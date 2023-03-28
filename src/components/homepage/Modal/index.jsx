import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { createVault, getItems } from "../../../api/api";
import Swal from "sweetalert2";

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

const AddItemModal = ({
  open,
  handleClose,
  userId,
  getUserData,
  setAllSelected,
  setBinSelected,
}) => {
  const [itemData, setItemData] = useState({
    type: "",
    name: "",
    vault: "",
    password: "",
    url: "",
    notes: "",
  });

  /*   useEffect(() => {
    if (editData) {
      setItemData({
        type: editData.type,
        name: editData.name,
        vault: editData.vault,
        password: editData.password,
        url: editData.url,
        notes: editData.notes,
      });
    }
  }, [editData]); */

  const handleTypeChange = (e) => {
    setItemData({
      ...itemData,
      type: e.target.value,
    });
  };

  const handleVaultChange = (e) => {
    setItemData({
      ...itemData,
      vault: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    setItemData({
      ...itemData,
      name: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setItemData({
      ...itemData,
      password: e.target.value,
    });
  };

  const handleUrlChange = (e) => {
    setItemData({
      ...itemData,
      url: e.target.value,
    });
  };

  const handleNotesChange = (e) => {
    setItemData({
      ...itemData,
      notes: e.target.value,
    });
  };

  const handleSaveItem = () => {
    if (
      (itemData.name &&
        itemData.type &&
        itemData.password &&
        itemData.vault) === ""
    ) {
      Swal.fire("Opss!", "Fill the necessary fields", "warning");
    } else {
      createVault(itemData, userId).then((res) => {
        if (res.success) {
          getUserData(userId);
          setAllSelected(true);
          setBinSelected(false);
          handleClose();
          setItemData({
            type: "",
            name: "",
            vault: "",
            password: "",
            url: "",
            notes: "",
          });
        }
      });
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ zIndex: "1000" }}
      >
        <Fade in={open}>
          <div className={`${styles["modal"]}`}>
            <div className={`${styles["modal--header"]}`}>
              <h4>New Item</h4>
              <CloseIcon
                className={`${styles["modal-close-icon"]}`}
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </div>
            <Divider />
            <div>
              <Row className={`${styles["add-item-container"]}`}>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="Vault-Name"
                      type="text"
                      value={itemData.vault}
                      onChange={handleVaultChange}
                      required
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row className={`${styles["add-item-container"]}`}>
                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                      labelId="type-select-label"
                      id="type-select"
                      value={itemData.type}
                      label="Age"
                      onChange={handleTypeChange}
                      required
                    >
                      <MenuItem value={"login"}>Login</MenuItem>
                      <MenuItem value={"card"}>Card</MenuItem>
                      <MenuItem value={"favourite"}>Favourite</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="User Name"
                      type="text"
                      value={itemData.name}
                      onChange={handleNameChange}
                      required
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row className={`${styles["add-item-container"]}`}>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      label="Password"
                      id="outlined"
                      onChange={handlePasswordChange}
                      required
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row className={`${styles["add-item-container"]}`}>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="Url"
                      type="text"
                      value={itemData.url}
                      onChange={handleUrlChange}
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row className={`${styles["add-item-container"]}`}>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      label="Notes"
                      type="text"
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      value={itemData.notes}
                      onChange={handleNotesChange}
                    />
                  </FormControl>
                </Col>
              </Row>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                handleSaveItem();
              }}
              className={`${styles["save-container"]}`}
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddItemModal;
