import axiosInstance from "./axios";

export const addFeedback = (data) =>
  axiosInstance.post("/feedback", data);

export const getMyFeedbacks = () =>
  axiosInstance.get("/feedback/my");

export const deleteFeedback = (id) =>
  axiosInstance.delete(`/feedback/${id}`);

export const getAllFeedbacks = () =>
  axiosInstance.get("/admin/feedbacks");
