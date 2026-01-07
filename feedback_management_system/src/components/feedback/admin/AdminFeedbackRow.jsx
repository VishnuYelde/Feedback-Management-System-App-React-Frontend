const AdminFeedbackRow = ({ feedback, onView, onDelete }) => {
    const dateToShow = feedback.updatedAt || feedback.createdAt;

    return (
        <tr className="text-center">
            <td className="p-2 border">{feedback.user.name}</td>
            <td className="p-2 border">{feedback.title}</td>
            <td className="p-2 border">⭐ {feedback.rating}</td>
            <td className="p-2 border">
                {new Date(feedback.createdAt).toLocaleString()}
            </td>
            <td className="p-2 border">
                {feedback.updatedAt
                    ? new Date(feedback.updatedAt).toLocaleString()
                    : "-"}
            </td>
            <td className="p-2 border space-x-2">
                <button
                    onClick={onView}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                    View
                </button>
                <button
                    onClick={onDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AdminFeedbackRow;
