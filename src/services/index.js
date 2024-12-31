import Axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
