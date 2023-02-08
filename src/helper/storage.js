const setToLocalStorage = ({ authToken, email, role, fullName }) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("email", email);
  localStorage.setItem("role", role);
  localStorage.setItem("fullName", fullName);
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
