import axios from "axios";

const removeBg = (payload) => axios.post("/api/v1/upload", payload);

export default removeBg;
