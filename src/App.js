// src/App.js
import React, { useState } from 'react';
import './App.css';
import StudentList from './StudentList';
import AddStudentModal from './AddStudentModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);

  const handleAddStudent = (studentData) => {
    // Implement logic to add a new student to the state
    // You can also make an API call to add a student to your backend here
    setStudents([...students, studentData]);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Student</button>
      <StudentList students={students} />
      {isModalOpen && (
        <AddStudentModal
          onClose={() => setIsModalOpen(false)}
          onAddStudent={handleAddStudent}
        />
      )}
    </div>
  );
}

export default App;
