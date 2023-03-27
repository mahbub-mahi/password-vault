import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getItems } from "../../api/api";

import styles from "./style.module.scss";
import Accordian from "../common/Accordion";
import AllValuts from "./AllVaults";
import AllItems from "./AllItems";
import AddItemModal from "./Modal";
import DataTable from "../common/DataTable";

import AddIcon from "@mui/icons-material/Add";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { Button } from "@mui/material";

function HomeComponent() {
  const token = Cookies.get("userId");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [userData, setUserData] = React.useState();
  const [loginSelected, setLoginSelected] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);
  const [favouriteSelected, setFavouriteSelected] = useState(false);
  const [allSelected, setAllSelected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [binSelected, setBinSelected] = useState(false);
  const [itemData, setItemData] = useState([]);
  // const [editData, setEditData] = useState();

  const handleOpen = (e) => {
    setOpen(true);
    /* if (e) {
      setEditData(e);
    } */
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (token) {
      setIsLoading(false);
      setUserId(token);
    } else {
      setIsLoading(true);
      navigate(`/`);
    }
  }, [token]);

  useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);

  const getUserData = async (e) => {
    await getItems(e).then((res) => {
      setItemData(res);
    });
  };

  let AllVaultData = [
    {
      header: "All Vaults",
      component: (
        <AllValuts
          setAllSelected={setAllSelected}
          setFavouriteSelected={setFavouriteSelected}
          setCardSelected={setCardSelected}
          setLoginSelected={setLoginSelected}
          setBinSelected={setBinSelected}
        />
      ),
    },
    {
      header: "All Items",
      component: (
        <AllItems
          setFavouriteSelected={setFavouriteSelected}
          setCardSelected={setCardSelected}
          setLoginSelected={setLoginSelected}
          setAllSelected={setAllSelected}
          setBinSelected={setBinSelected}
        />
      ),
    },
  ];

  const handleBinSelect = () => {
    setBinSelected(true);
    setCardSelected(false);
    setAllSelected(false);
    setLoginSelected(false);
    setFavouriteSelected(false);
  };
  return (
    <section>
      {!isLoading ? (
        <>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["filter-container"]}`}>
              <h4>Filter</h4>
              <div>
                <div>
                  {AllVaultData.map((item) => (
                    <div>
                      <Accordian header={item.header}>
                        {item.component}
                      </Accordian>
                    </div>
                  ))}
                </div>
                <div
                  onClick={handleBinSelect}
                  className={`${styles["bin-container"]}`}
                >
                  <p>Bin</p>
                  <FolderDeleteIcon className={`${styles["bin-icon"]}`} />
                </div>
              </div>
            </div>

            <div className={`${styles["details-container"]}`}>
              <div className={`${styles["add-item-container"]}`}>
                <h4>ALL VAULT</h4>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => handleOpen()}
                >
                  Add New Item
                </Button>
              </div>
              <div className={`${styles["data-container"]}`}>
                <DataTable
                  loginSelected={loginSelected}
                  favouriteSelected={favouriteSelected}
                  cardSelected={cardSelected}
                  allSelected={allSelected}
                  binSelected={binSelected}
                  data={itemData}
                  userId={userId}
                  handleOpen={handleOpen}
                  getUserData={getUserData}
                />
              </div>
            </div>
          </div>
          <AddItemModal
            userData={userData}
            open={open}
            userId={userId}
            //  editData={editData}
            handleClose={handleClose}
            getUserData={getUserData}
          />
        </>
      ) : null}
    </section>
  );
}

export default HomeComponent;
