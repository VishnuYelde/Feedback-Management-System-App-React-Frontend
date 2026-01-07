import { useState } from "react";
import { addFeedback } from "../../../api/feedbackApi";

const AddFeedback = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addFeedback({ title, message, rating });

    setTitle("");
    setMessage("");
    setRating(5);

    onSuccess(); // reload list
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-2xl shadow-lg w-1/2">
      <input
        className="w-full border p-2 mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      Rating(1-5):
      <input
        type="number"
        min="1"
        max="5"
        className="w-full border p-2 mb-6"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2">
          Add Feedback
        </button>
      </div>
    </form>
  );
};

export default AddFeedback;
