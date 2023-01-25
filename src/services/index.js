import Axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
};
// const instance = Axios.create();

// instance.interceptors.request.use(
//   async function (config) {
//     config.headers.Authorization = "Bearer " + "token here";
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export async function get(url) {
  const response = Axios.get(url, headers);
  try {
    const responseJson = await response;
    return responseJson.data;
  } catch (err) {
    if (err.response?.data) {
      return err.response.data;
    } else {
      return err.response;
    }
  }
}
