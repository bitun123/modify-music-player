import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const registration = async ({ userName, email, password }) => {
  const response = await api.post("/api/auth/register", {
    userName,
    email,
    password,
  });
  return response.data;
};

export const login = async ({ userName, email, password }) => {
  const response = await api.post("/api/auth/login", {
    userName,
    email,
    password,
  });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/api/auth/getAllUsers");
  return response.data;
};

export const logout = async () => {
  const response = await api.get("/api/auth/logout");
  return response.data;
};
