import axios from "axios";
import { getFromLocalStorage } from "../helper/storage";
const token = getFromLocalStorage("authToken");

const activityDetails = () =>
  axios.get("/api/v1/activity/details", {
    headers: {
      Authorization: token,
    },
  });

export default activityDetails;
