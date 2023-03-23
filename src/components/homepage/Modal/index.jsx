import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { createVault, getItems } from "../../../api/api";

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

const AddItemModal = ({ open, handleClose, userId, getUserData, editData }) => {
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
    createVault(itemData, userId).then((res) => {
      if (res.success) {
        getUserData(userId);
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
      >
        <Fade in={open}>
          <div className={`${styles["modal"]}`}>
            <div className={`${styles["modal--header"]}`}>
              <h4>New Item</h4>
              <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
            </div>
            <Divider />
            <div>
              <Row>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="Vault-Name"
                      type="text"
                      value={itemData.vault}
                      onChange={handleVaultChange}
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                      labelId="type-select-label"
                      id="type-select"
                      value={itemData.type}
                      label="Age"
                      onChange={handleTypeChange}
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
                    />
                  </FormControl>
                </Col>
              </Row>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  id="outlined"
                  onChange={handlePasswordChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="outlined"
                  label="Url"
                  type="text"
                  value={itemData.url}
                  onChange={handleUrlChange}
                />
              </FormControl>
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
            </div>
            <Button
              variant="contained"
              onClick={() => {
                handleSaveItem();
              }}
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
