import { useEffect, useState } from "react";
import { getMyFeedbacks } from "../../api/feedbackApi";
import AddFeedback from "../../components/feedback/user/AddFeedback";
import UserFeedbackList from "../../components/feedback/user/UserFeedbackList";
import DashboardLayout from "../../components/layout/DashboardLayout";

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
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center justify-center">Add Feedbacks</h1>

        <div className="flex items-center justify-center">
          <AddFeedback onSuccess={loadFeedbacks} />
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">My Feedbacks</h1>
        <UserFeedbackList feedbacks={feedbacks} onChange={loadFeedbacks} />
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
