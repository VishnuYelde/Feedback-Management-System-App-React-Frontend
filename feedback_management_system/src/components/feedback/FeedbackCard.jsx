import { deleteFeedback } from "../../api/feedbackApi";
import EditFeedback from "./EditFeedback";
import { useState } from "react";

const FeedbackCard = ({ feedback, onChange }) => {
  const [editing, setEditing] = useState(false);

  const handleDelete = async () => {
    await deleteFeedback(feedback.id);
    onChange();
  };

  // Decide which date to show
  const displayDate = feedback.updatedAt
    ? `Updated: ${new Date(feedback.updatedAt).toLocaleString()}`
    : `Created: ${new Date(feedback.createdAt).toLocaleString()}`;

  return (
    <div className="bg-white p-4 rounded shadow">
      {editing ? (
        <EditFeedback
          feedback={feedback}
          onCancel={() => setEditing(false)}
          onSuccess={() => {
            setEditing(false);
            onChange();
          }}
        />
      ) : (
        <>
          <h3 className="font-bold">{feedback.title}</h3>
          <p>{feedback.message}</p>
          <p>⭐ {feedback.rating}</p>

          <p className="text-sm text-gray-500 mt-1">{displayDate}</p>

          <div className="mt-2 space-x-2">
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedbackCard;
