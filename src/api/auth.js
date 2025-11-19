import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true
});

export const sendOtp = (email) => api.post("/send-otp", { email });
export const verifyOtp = (email, code) => api.post("/verify-otp", { email, code });
export const getMe = () => api.get("/me");
export const logout = () => api.post("/logout");
