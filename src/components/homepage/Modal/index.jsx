import React from "react";
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

const AddItemModal = (props) => {
  const { open, handleClose } = props;

  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
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
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                      labelId="type-select-label"
                      id="type-select"
                      value={type}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="folder-select-label">Folder</InputLabel>
                    <Select
                      labelId="folder-select-label"
                      id="folder-select"
                      value={type}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                </Col>
              </Row>
              <FormControl fullWidth>
                <TextField label="Password" type="password" id="outlined" />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="outlined"
                  label="Url"
                  type="text"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Notes"
                  type="text"
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  //  variant="standard"
                />
              </FormControl>
            </div>
            <Button variant="contained" onClick={""}>
              Save
            </Button>
            <Button variant="outlined">Cancel</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddItemModal;
