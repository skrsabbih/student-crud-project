import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch all students from the API
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete a student by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/students/${id}`);
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Student List</h2>
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          + Add New Student
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Email</th>
              <th className="text-left px-4 py-2 border">Phone</th>
              <th className="text-left px-4 py-2 border">Course</th>
              <th className="text-left px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{student.name}</td>
                  <td className="px-4 py-2 border">{student.email}</td>
                  <td className="px-4 py-2 border">{student.phone}</td>
                  <td className="px-4 py-2 border">{student.course}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => navigate(`/update/${student.id}`)}
                      className="mr-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
