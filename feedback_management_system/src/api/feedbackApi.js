import axiosInstance from "./axios";

// Get logged-in user's feedbacks
export const getMyFeedbacks = async () => {
  const res = await axiosInstance.get("/api/feedback");
  return res.data;
};

// Add feedback
export const addFeedback = async (data) => {
  const res = await axiosInstance.post("/api/feedback", data);
  return res.data;
};

// Update feedback
export const updateFeedback = async (id, data) => {
  const res = await axiosInstance.put(`/api/feedback/${id}`, data);
  return res.data;
};

// Delete feedback
export const deleteFeedback = async (id) => {
  const res = await axiosInstance.delete(`/api/feedback/${id}`);
  return res.data;
};
