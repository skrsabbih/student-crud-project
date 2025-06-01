import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/api/students/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => alert('Failed to fetch student'));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      if (id) {
        await axios.put(`http://localhost:8000/api/students/${id}`, form);
      } else {
        await axios.post('http://localhost:8000/api/students', form);
      }
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert('Something went wrong.');
      }
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">
        {id ? 'Edit Student' : 'Add New Student'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name[0]}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email[0]}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone[0]}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Course</label>
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.course && (
            <p className="text-sm text-red-600 mt-1">{errors.course[0]}</p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {id ? 'Update Student' : 'Create Student'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
