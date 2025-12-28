import axiosInstance from "./axios";

export const loginUser = async (data) => {
  const response = await axiosInstance.post("/api/auth/login", data);
  return response.data; // { token }
};

export const registerUser = async (data) => {
  const response = await axiosInstance.post("/api/auth/register", data);
  return response.data;
};
