import React, { useState, useEffect } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreIcon from "@mui/icons-material/Restore";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import styles from "./style.module.scss";
import axios from "axios";
import { CSVLink } from "react-csv";
import { deleteVaultTemp, restoreVault } from "../../../api/api";

/* const Users = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    selected: false,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    selected: true,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 6,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 7,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 8,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 9,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 10,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 11,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 11,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 12,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
]; */

const DataTable = (props) => {
  const {
    userId,
    handleOpen,
    data,
    getUserData,
    favouriteSelected,
    loginSelected,
    cardSelected,
    allSelected,
    binSelected,
  } = props;

  const [list, setList] = useState([]);
  const [masterChecked, setMasterChecked] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [deletedData, setDeletedData] = useState([]);
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    if (userId !== "" || undefined) {
      if (data) {
        const items = [];
        data.map((e, index) => {
          items.push({
            mainId: e._id,
            id: index,
            selected: false,
            isDeleted: e.isDeleted,
            name: e.name,
            password: e.password,
            type: e.type,
            url: e.url,
            notes: e.notes,
          });
          setList(items);
        });
      }
    }
  }, [data]);

  useEffect(() => {
    if (list) {
      setMainData(list.filter((x) => x.isDeleted === false));
      setDeletedData(list.filter((x) => x.isDeleted === true));
    }
  }, [list]);

  useEffect(() => {
    if (list) {
      const items = [];
      list.map((e, index) => {
        items.push({
          id: index,
          name: e.name,
          password: e.password,
          type: e.type,
          url: e.url,
          notes: e.notes,
        });
      });
      setCsvData(items.filter((x) => x.isDeleted === false));
    }
  }, [list]);

  const onMasterCheck = (e) => {
    list.map((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    setSelectedList(list.filter((e) => e.selected));
  };

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e, item) => {
    list.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = list.length;
    const totalCheckedItems = list.filter((e) => e.selected).length;

    setMasterChecked(totalItems === totalCheckedItems);
    setSelectedList(list.filter((e) => e.selected));
  };

  const handleEditData = (e) => {
    handleOpen(e);
  };

  const handleDeleteData = async (e) => {
    if (userId !== "" || undefined) {
      await axios
        .delete(`http://localhost:8000/delete/${e.mainId}`)
        .then((res) => {
          if (res.status === 200) {
            getUserData(userId);
          }
        });
    }
  };

  const handleTempDelete = async (e) => {
    if (userId !== "" || undefined) {
      deleteVaultTemp(e.mainId).then((res) => {
        if (res.success) {
          getUserData(userId);
        }
      });
    }
  };

  const handleRestoreData = (e) => {
    restoreVault(e.mainId).then((res) => {
      if (res.success) {
        getUserData(userId);
      }
    });
  };

  return (
    <div className="container">
      {data.length === 0 ? (
        <p className={`${styles["no-item-container"]}`}>No Items</p>
      ) : (
        <div className="row">
          <div className={`${styles["table-container"]} col-md-12`}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Password</th>
                  <th scope="col">url</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {binSelected ? (
                  deletedData.length > 0 ? (
                    <>
                      {deletedData.map((user) => (
                        <tr
                          key={user.id}
                          className={user.selected ? "selected" : ""}
                        >
                          <td className={`${styles["name-col"]}`}>
                            {user.name}
                          </td>
                          <td className={`${styles["type-col"]}`}>
                            {user.type}
                          </td>
                          <td className={`${styles["password-col"]}`}>
                            {user.password}
                          </td>
                          <td className={`${styles["url-col"]}`}>{user.url}</td>
                          <td className={`${styles["action-col"]}`}>
                            <RestoreIcon
                              onClick={() => handleRestoreData(user)}
                              className={`${styles["edit-data"]}`}
                            />
                            <DeleteForeverIcon
                              onClick={() => handleDeleteData(user)}
                              className={`${styles["delete-data"]}`}
                              style={{ marginLeft: "7px" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <p>No data </p>
                  )
                ) : null}
                {allSelected ? (
                  <>
                    {mainData.map((user) => (
                      <tr
                        key={user.id}
                        className={user.selected ? "selected" : ""}
                      >
                        <td className={`${styles["name-col"]}`}>{user.name}</td>
                        <td className={`${styles["type-col"]}`}>{user.type}</td>
                        <td className={`${styles["password-col"]}`}>
                          {user.password}
                        </td>
                        <td className={`${styles["url-col"]}`}>{user.url}</td>
                        <td className={`${styles["action-col"]}`}>
                          {/* <EditIcon
                          onClick={() => handleEditData(user)}
                          className={`${styles["edit-data"]}`}
                        /> */}
                          <DeleteForeverIcon
                            onClick={() => handleTempDelete(user)}
                            className={`${styles["delete-data"]}`}
                            style={{ marginLeft: "7px" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : null}

                {loginSelected ? (
                  <>
                    {mainData.map((user) =>
                      user.type === "login" ? (
                        <tr
                          key={user.id}
                          className={user.selected ? "selected" : ""}
                        >
                          <td className={`${styles["name-col"]}`}>
                            {user.name}
                          </td>
                          <td className={`${styles["type-col"]}`}>
                            {user.type}
                          </td>
                          <td className={`${styles["password-col"]}`}>
                            {user.password}
                          </td>
                          <td className={`${styles["url-col"]}`}>{user.url}</td>
                          <td className={`${styles["action-col"]}`}>
                            {/* <EditIcon
                            onClick={() => handleEditData(user)}
                            className={`${styles["edit-data"]}`}
                          /> */}
                            <DeleteForeverIcon
                              onClick={() => handleTempDelete(user)}
                              className={`${styles["delete-data"]}`}
                              style={{ marginLeft: "7px" }}
                            />
                          </td>
                        </tr>
                      ) : null
                    )}
                  </>
                ) : null}

                {cardSelected ? (
                  <>
                    {mainData.map((user) =>
                      user.type === "card" ? (
                        <tr
                          key={user.id}
                          className={user.selected ? "selected" : ""}
                        >
                          <td className={`${styles["name-col"]}`}>
                            {user.name}
                          </td>
                          <td className={`${styles["type-col"]}`}>
                            {user.type}
                          </td>
                          <td className={`${styles["password-col"]}`}>
                            {user.password}
                          </td>
                          <td className={`${styles["url-col"]}`}>{user.url}</td>
                          <td className={`${styles["action-col"]}`}>
                            {/* <EditIcon
                            onClick={() => handleEditData(user)}
                            className={`${styles["edit-data"]}`}
                          /> */}
                            <DeleteForeverIcon
                              onClick={() => handleTempDelete(user)}
                              className={`${styles["delete-data"]}`}
                              style={{ marginLeft: "7px" }}
                            />
                          </td>
                        </tr>
                      ) : null
                    )}
                  </>
                ) : null}

                {favouriteSelected ? (
                  <>
                    {mainData.map((user) =>
                      user.type === "favourite" ? (
                        <tr
                          key={user.id}
                          className={user.selected ? "selected" : ""}
                        >
                          <th scope="row">
                            <input
                              type="checkbox"
                              checked={user.selected}
                              className="form-check-input"
                              id="rowcheck{user.id}"
                              onChange={(e) => onItemCheck(e, user)}
                            />
                          </th>
                          <td className={`${styles["name-col"]}`}>
                            {user.name}
                          </td>
                          <td className={`${styles["type-col"]}`}>
                            {user.type}
                          </td>
                          <td className={`${styles["password-col"]}`}>
                            {user.password}
                          </td>
                          <td className={`${styles["url-col"]}`}>{user.url}</td>
                          <td className={`${styles["action-col"]}`}>
                            {/*  <EditIcon
                            onClick={() => handleEditData(user)}
                            className={`${styles["edit-data"]}`}
                          /> */}
                            <DeleteForeverIcon
                              onClick={() => handleTempDelete(user)}
                              className={`${styles["delete-data"]}`}
                              style={{ marginLeft: "7px" }}
                            />
                          </td>
                        </tr>
                      ) : null
                    )}
                  </>
                ) : null}
              </tbody>
            </table>
            <div className={`${styles["download-csv-container"]}`}>
              {data.length > 0 ? (
                <>
                  <CSVLink
                    data={csvData}
                    filename={"password-file.csv"}
                    separator={";"}
                    className={`${styles["download-csv-container"]}`}
                  >
                    <p
                      style={{
                        paddingRight: "10px",
                        color: "#1976d2",
                        margin: "0",
                      }}
                    >
                      Download All As CSV
                    </p>
                    <DownloadIcon />
                  </CSVLink>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
