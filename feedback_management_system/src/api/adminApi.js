import axiosInstance from "./axios";

// Get all user's feedbacks
export const getAllFeedbacks = async () => {
  const res = await axiosInstance.get("/api/admin/feedbacks");
  return res.data;
};

// Delete feedback
export const deleteFeedbackByAdmin = async (id) => {
  await axiosInstance.delete(`/api/admin/feedbacks/${id}`);
};
