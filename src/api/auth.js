import axios from "axios";


const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const formHeader = () => {
  axios.defaults.headers = {
    "content-type": "multipart/form-data",
  };
};

export { setAuthHeaders, formHeader };
