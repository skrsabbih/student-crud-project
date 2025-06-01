import { BrowserRouter as Router, Routes, Route } from 'react-router';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/create" element={<StudentForm />} />
          <Route path="/update/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}