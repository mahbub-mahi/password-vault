import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import Accordian from "../common/Accordion";
import AllValuts from "./AllVaults";
import AllItems from "./AllItems";
import Folders from "./Folders";
import AddItemModal from "./Modal";
import DataTable from "../common/DataTable";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

function HomeComponent({ props }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let AllVaultData = [
    {
      header: "All Vaults",
      component: <AllValuts />,
    },
    {
      header: "All Items",
      component: <AllItems />,
    },
    {
      header: "Folders",
      component: <Folders />,
    },
  ];

  return (
    <section>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["filter-container"]}`}>
          <h4>Filter</h4>
          <div>
            <div>
              {AllVaultData.map((item) => (
                <div>
                  <Accordian header={item.header}>{item.component}</Accordian>
                </div>
              ))}
            </div>
            <div>Bin</div>
          </div>
        </div>

        <div className={`${styles["details-container"]}`}>
          <div className={`${styles["add-item-container"]}`}>
            <h4>ALL VAULT</h4>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add New Item
            </Button>
          </div>
          <div className={`${styles["data-container"]}`}>
            <DataTable />
          </div>
        </div>
      </div>
      <AddItemModal open={open} handleClose={handleClose} />
    </section>
  );
}

export default HomeComponent;
