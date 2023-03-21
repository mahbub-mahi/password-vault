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
