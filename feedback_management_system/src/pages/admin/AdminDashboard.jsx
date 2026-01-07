import DashboardLayout from "../../components/layout/DashboardLayout";
import AdminFeedbackTable from "../../components/feedback/admin/AdminFeedbackTable";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <AdminFeedbackTable />
    </DashboardLayout>
  );
};

export default AdminDashboard;
