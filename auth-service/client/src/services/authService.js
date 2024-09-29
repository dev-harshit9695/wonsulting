import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const register = (userData) => axios.post(`${API_URL}/register`, userData);
const login = (userData) => axios.post(`${API_URL}/login`, userData);
const logout = () => axios.get(`${API_URL}/logout`);
const verifyEmail = (token) =>
  axios.get(`${API_URL}/verify-email?token=${token}`);

export { register, login, logout, verifyEmail };
