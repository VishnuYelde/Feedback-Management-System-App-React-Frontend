import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks, onChange }) => {
  if (feedbacks.length === 0) {
    return <p>No feedbacks yet.</p>;
  }

  return (
    <div className="space-y-4">
      {feedbacks.map((fb) => (
        <FeedbackCard key={fb.id} feedback={fb} onChange={onChange} />
      ))}
    </div>
  );
};

export default FeedbackList;
