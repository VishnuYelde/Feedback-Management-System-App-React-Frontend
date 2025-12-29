import { useEffect, useState } from "react";
import { getMyFeedbacks } from "../../api/feedbackApi";
import AddFeedback from "../../components/feedback/AddFeedback";
import FeedbackList from "../../components/feedback/FeedbackList";

const UserDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedbacks = async () => {
    const data = await getMyFeedbacks();
    setFeedbacks(data);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Feedbacks</h1>

      <AddFeedback onSuccess={loadFeedbacks} />

      <FeedbackList feedbacks={feedbacks} onChange={loadFeedbacks} />
    </div>
  );
};

export default UserDashboard;
