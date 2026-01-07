import { useEffect, useState } from "react";
import { getAllFeedbacks, deleteFeedbackByAdmin } from "../../../api/adminApi";

const AdminFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedbacks = async () => {
    const data = await getAllFeedbacks();
    setFeedbacks(data);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    await deleteFeedbackByAdmin(id);
    loadFeedbacks();
  };

  return (
    <div className="space-y-4">
      {feedbacks.map((fb) => (
        <div key={fb.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{fb.title}</h3>
          <p>{fb.message}</p>
          <p>⭐ {fb.rating}</p>

          <p className="text-sm text-gray-500">
            By: {fb.user?.email}
          </p>

          <button
            onClick={() => handleDelete(fb.id)}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminFeedbackList;
