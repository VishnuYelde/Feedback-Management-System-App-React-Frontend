import { useState } from "react";
import { updateFeedback } from "../../api/feedbackApi";

const EditFeedback = ({ feedback, onCancel, onSuccess }) => {
  const [title, setTitle] = useState(feedback.title);
  const [message, setMessage] = useState(feedback.message);
  const [rating, setRating] = useState(feedback.rating);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFeedback(feedback.id, { title, message, rating });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-2 mb-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input
        type="number"
        min="1"
        max="5"
        className="w-full border p-2 mb-2"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <div className="space-x-2">
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditFeedback;
