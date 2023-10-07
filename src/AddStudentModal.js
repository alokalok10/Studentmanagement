// src/AddStudentModal.js
import React, { useState } from 'react';
import './AddStudentModal.css';

const AddStudentModal = ({ onClose, onAddStudent }) => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    emailId: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Perform validation here (e.g., check for required fields)
    if (
      studentData.studentName &&
      studentData.dateOfBirth &&
      studentData.gender &&
      studentData.fatherName &&
      studentData.motherName &&
      studentData.emailId &&
      studentData.phoneNumber &&
      studentData.address
    ) {
      // If all required fields are provided, call the onAddStudent function
      onAddStudent(studentData);
      onClose();
    } else {
      // Display an error message or handle validation failure as needed
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="modal-container">
      <h2>Add Student</h2>
      <label>Student Name:</label>
      <input
        type="text"
        name="studentName"
        value={studentData.studentName}
        onChange={handleInputChange}
        required
      />
      <label>Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={studentData.dateOfBirth}
        onChange={handleInputChange}
        required
      />
      <label>Gender:</label>
      <select
        name="gender"
        value={studentData.gender}
        onChange={handleInputChange}
        required
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label>Father Name:</label>
      <input
        type="text"
        name="fatherName"
        value={studentData.fatherName}
        onChange={handleInputChange}
        required
      />
      <label>Mother Name:</label>
      <input
        type="text"
        name="motherName"
        value={studentData.motherName}
        onChange={handleInputChange}
        required
      />
      <label>Email Id:</label>
      <input
        type="email"
        name="emailId"
        value={studentData.emailId}
        onChange={handleInputChange}
        required
      />
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        value={studentData.phoneNumber}
        onChange={handleInputChange}
        required
      />
      <label>Address:</label>
      <textarea
        name="address"
        value={studentData.address}
        onChange={handleInputChange}
        required
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddStudentModal;
