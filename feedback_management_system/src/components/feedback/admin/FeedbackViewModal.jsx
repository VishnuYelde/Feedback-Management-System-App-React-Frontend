import { X } from "lucide-react";

const FeedbackViewModal = ({ feedback, onClose }) => {
    if (!feedback) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
            {/* Card */}
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

                {/* Close icon */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                >
                    <X size={22} />
                </button>

                {/* User info */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center">
                        {feedback.user?.name || "User"}
                    </h2>
                    <p className="text-sm text-gray-500 flex items-center justify-center">
                        {feedback.user?.email}
                    </p>
                </div>

                {/* Divider */}
                <hr className="mb-4" />

                {/* Title */}
                <div className="mb-3">
                    <p className="text-sm text-gray-500">Title</p>
                    <p className="text-lg font-medium text-gray-800">
                        {feedback.title}
                    </p>
                </div>

                {/* Rating */}
                <div className="mb-3 flex items-center gap-2">
                    <p className="text-sm text-gray-500">Rating</p>
                    <span className="flex items-center gap-1 text-gray-800 font-semibold">
                        ⭐ {feedback.rating}
                    </span>
                </div>

                {/* Message */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500">Message</p>
                    <p className="text-gray-800 font-semibold leading-relaxed">
                        {feedback.message}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackViewModal;
