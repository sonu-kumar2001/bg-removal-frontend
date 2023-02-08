import React, { useState } from "react";
import authApi from "../../api/axios";
import { setAuthHeaders } from "../../api/auth";
import { setToLocalStorage } from "../../helper/storage";
import SignupForm from "./SignupForm";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await authApi.signup({
        fullName,
        email,
        password,
        role: "user",
      });
      setToLocalStorage({
        authToken: response.data.user.createdToken,
        email: response.data.user.email,
        role: response.data.user.role,
        fullName: response.data.user.fullName,
      });
      setAuthHeaders();
      setLoading(false);
      window.location.href = "/user/dashboard";
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <SignupForm
      setFullName={setFullName}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
}
