import React, { useState } from "react";
import authApi from "../../api/axios";
import LoginForm from "./LoginForm";
import { setAuthHeaders } from "../../api/auth";
import { setToLocalStorage } from "../../helper/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await authApi.login({
        email,
        password,
      });
      setToLocalStorage({
        authToken: response.data.userInfo.token,
        email: response.data.userInfo.email,
        role: response.data.userInfo.role,
        fullName: response.data.userInfo.fullName,
      });
      setAuthHeaders();
      setLoading(false);
      if (
        response.data.userInfo.role === "admin"
          ? (window.location.href = "/admin/dashboard")
          : (window.location.href = "/user/dashboard")
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
}
