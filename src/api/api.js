import axios from "axios";
/* import { API_HOST } from "../../env";
import { adminToken } from "../../env";
 */
export const createUser = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/create`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const loginUser = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const getItems = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/${id}/items`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const createVault = (data, id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/${id}/createVault`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const deleteVaultTemp = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/${id}/deleteVaultTemp`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const editVault = (data, id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/${id}/editVault`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export const restoreVault = (id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:8000/${id}/restore`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.data)
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};
