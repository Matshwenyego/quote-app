import Axios from "axios";
import { toast } from "react-toastify";

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
    toast.error(err.message);
    return err.message;
  }
}
