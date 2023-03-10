import axios from "axios";
import { getFromLocalStorage } from "../helper/storage";
const token = getFromLocalStorage("authToken");
const removeBg = (payload) =>
  axios.post("/api/v1/upload", payload, {
    headers: {
      Authorization: token,
    },
  });

export default removeBg;
