const FeedbackViewModal = ({ feedback, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-96">
                <h2 className="text-xl font-bold mb-2">{feedback.title}</h2>
                <p className="mb-2">{feedback.message}</p>
                <p>⭐ {feedback.rating}</p>
                <p className="text-sm text-gray-500 mt-2">
                    By: {feedback.user.email}
                </p>

                <button
                    onClick={onClose}
                    className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default FeedbackViewModal;
