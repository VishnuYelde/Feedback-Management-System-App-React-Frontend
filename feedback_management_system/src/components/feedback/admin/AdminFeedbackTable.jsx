import { useEffect, useState } from "react";
import { getAllFeedbacks, deleteFeedbackByAdmin } from "../../../api/adminApi.js";
import AdminFeedbackRow from "./AdminFeedbackRow";
import FeedbackViewModal from "./FeedbackViewModal";

const AdminFeedbackTable = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [selected, setSelected] = useState(null);

    const loadData = async () => {
        const data = await getAllFeedbacks();
        setFeedbacks(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Delete this feedback?")) {
            await deleteFeedbackByAdmin(id);
            loadData();
        }
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 border">User Name</th>
                        <th className="p-2 border">Feedback Title</th>
                        <th className="p-2 border">Rating</th>
                        <th className="p-2 border">Submitted Date</th>
                        <th className="p-2 border">Updated Date</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {feedbacks.map((fb) => (
                        <AdminFeedbackRow
                            key={fb.id}
                            feedback={fb}
                            onView={() => setSelected(fb)}
                            onDelete={() => handleDelete(fb.id)}
                        />
                    ))}
                </tbody>
            </table>

            {selected && (
                <FeedbackViewModal
                    feedback={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
};

export default AdminFeedbackTable;
