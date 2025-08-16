import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [apptsRes, deptsRes, docsRes] = await Promise.all([
          fetch('https://backend-itiddoctor-395g.vercel.app/api/appointments'),
          fetch('https://backend-itiddoctor-395g.vercel.app/api/departments'),
          fetch('https://backend-itiddoctor-395g.vercel.app/api/doctors')
        ]);

        const [apptsData, deptsData, docsData] = await Promise.all([
          apptsRes.json(),
          deptsRes.json(),
          docsRes.json()
        ]);

        if (!apptsRes.ok || !deptsRes.ok || !docsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        setAppointments(apptsData.data || []);
        setDepartments(deptsData.data || []);
        setDoctors(docsData.data || []);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ جلب اسم القسم بالـ ID
  const getDepartmentName = (id) => {
    if (!id) return 'Unknown Department';
    const dept = departments.find(d => d._id === id);
    return dept?.translations?.en?.title || dept?.title || 'Unknown Department';
  };

  // ✅ جلب اسم الدكتور بالـ ID
  const getDoctorName = (id) => {
    if (!id) return 'Unknown Doctor';
    const doc = doctors.find(d => d._id === id);
    return doc?.translations?.en?.name || doc?.name || 'Unknown Doctor';
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`https://backend-itiddoctor-395g.vercel.app/api/appointments/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update status');
      }

      setAppointments(prev =>
        prev.map(appt =>
          appt._id === id ? { ...appt, status: newStatus } : appt
        )
      );
      toast.success('Status updated successfully');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const filteredAppointments = filter === 'all'
    ? appointments
    : appointments.filter(appt => appt.status === filter);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Appointment Management</h1>
      
      <div className="mb-6">
        <label className="mr-4">Filter by status:</label>
        <select
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Appointments</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Patient</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Date & Time</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">Doctor</th>
              <th className="px-4 py-2 border">Reason</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => {
                // ✅ التعامل مع الـ IDs بشكل صحيح
                const departmentId = typeof appointment.department === 'object'
                  ? appointment.department._id || appointment.department.id
                  : appointment.department;
                const doctorId = typeof appointment.doctor === 'object'
                  ? appointment.doctor._id || appointment.doctor.id
                  : appointment.doctor;

                return (
                  <tr key={appointment._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{appointment.name}</td>
                    <td className="px-4 py-2 border">{appointment.phone}</td>
                    <td className="px-4 py-2 border">
                      {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                    </td>
                    <td className="px-4 py-2 border">{getDepartmentName(departmentId)}</td>
                    <td className="px-4 py-2 border">{getDoctorName(doctorId)}</td>
                    <td className="px-4 py-2 border">{appointment.reason}</td>
                    <td className="px-4 py-2 border">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="flex items-center justify-center px-4 py-2 border">
                      <button
                        onClick={() => handleStatusChange(appointment._id, 'confirmed')}
                        className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusChange(appointment._id, 'cancelled')}
                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="px-4 py-6 text-center text-gray-500 border">
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentManagement;
