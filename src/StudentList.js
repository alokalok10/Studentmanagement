// src/StudentList.js
import React, { useState, useEffect } from 'react';
import './StudentList.css';


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulated dummy data (replace with actual data retrieval logic)
  const dummyData = [
    {
      studentId: "1",
      studentName: "John Doe",
      dateOfBirth: "2000-05-15",
      gender: "Male",
      fatherName: "David Doe",
      motherName: "Emily Doe",
      emailId: "john.doe@example.com",
      phoneNumber: "+1 123-456-7890",
      address: "123 Main Street, Cityville, State, Zipcode"
    },
    // Add more data as needed

    {
        "studentId": "2",
        "studentName": "Jane Smith",
        "dateOfBirth": "2001-03-20",
        "gender": "Female",
        "fatherName": "Michael Smith",
        "motherName": "Sarah Smith",
        "emailId": "jane.smith@example.com",
        "phoneNumber": "+1 987-654-3210",
        "address": "456 Elm Avenue, Townsville, State, Zipcode"
      },

      {
        "studentId": "3",
        "studentName": "Sam Johnson",
        "dateOfBirth": "2002-09-10",
        "gender": "Male",
        "fatherName": "Robert Johnson",
        "motherName": "Laura Johnson",
        "emailId": "sam.johnson@example.com",
        "phoneNumber": "+1 555-123-4567",
        "address": "789 Oak Road, Villagetown, State, Zipcode"
      },
      {
        "studentId": "4",
        "studentName": "Emily Brown",
        "dateOfBirth": "2003-11-05",
        "gender": "Female",
        "fatherName": "James Brown",
        "motherName": "Maria Brown",
        "emailId": "emily.brown@example.com",
        "phoneNumber": "+1 111-222-3333",
        "address": "101 Pine Street, Countryside, State, Zipcode"
      },
      {
        "studentId": "5",
        "studentName": "Michael Davis",
        "dateOfBirth": "2004-07-25",
        "gender": "Male",
        "fatherName": "William Davis",
        "motherName": "Nancy Davis",
        "emailId": "michael.davis@example.com",
        "phoneNumber": "+1 333-444-5555",
        "address": "222 Birch Lane, Suburbia, State, Zipcode"
      }
  ];

  useEffect(() => {
    // Simulate fetching students data from an API or database
    // For now, let's use a setTimeout to mimic an asynchronous API call
    setTimeout(() => {
      // Replace this with your actual API fetch logic
      const fetchData = async () => {
        try {
          // Make an API request to fetch student data
          // Example using fetch API:
          // const response = await fetch('https://api.example.com/students');
          // const data = await response.json();
  
          // For now, let's use the provided dummy data
          const data = [
            {
              studentId: "1",
              studentName: "John Doe",
              dateOfBirth: "2000-05-15",
              gender: "Male",
              fatherName: "David Doe",
              motherName: "Emily Doe",
              emailId: "john.doe@example.com",
              phoneNumber: "+1 123-456-7890",
              address: "123 Main Street, Cityville, State, Zipcode"
            },

            {
                "studentId": "2",
                "studentName": "Jane Smith",
                "dateOfBirth": "2001-03-20",
                "gender": "Female",
                "fatherName": "Michael Smith",
                "motherName": "Sarah Smith",
                "emailId": "jane.smith@example.com",
                "phoneNumber": "+1 987-654-3210",
                "address": "456 Elm Avenue, Townsville, State, Zipcode"
              },
        
              {
                "studentId": "3",
                "studentName": "Sam Johnson",
                "dateOfBirth": "2002-09-10",
                "gender": "Male",
                "fatherName": "Robert Johnson",
                "motherName": "Laura Johnson",
                "emailId": "sam.johnson@example.com",
                "phoneNumber": "+1 555-123-4567",
                "address": "789 Oak Road, Villagetown, State, Zipcode"
              },
              {
                "studentId": "4",
                "studentName": "Emily Brown",
                "dateOfBirth": "2003-11-05",
                "gender": "Female",
                "fatherName": "James Brown",
                "motherName": "Maria Brown",
                "emailId": "emily.brown@example.com",
                "phoneNumber": "+1 111-222-3333",
                "address": "101 Pine Street, Countryside, State, Zipcode"
              },
              {
                "studentId": "5",
                "studentName": "Michael Davis",
                "dateOfBirth": "2004-07-25",
                "gender": "Male",
                "fatherName": "William Davis",
                "motherName": "Nancy Davis",
                "emailId": "michael.davis@example.com",
                "phoneNumber": "+1 333-444-5555",
                "address": "222 Birch Lane, Suburbia, State, Zipcode"
              }
           
          ];
  
          setStudents(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, 1000); // Simulate a delay of 1 second (adjust as needed)
  }, []);
  

  const handleDelete = (studentId) => {
    // Filter out the student with the matching studentId and update the state
    const updatedStudents = students.filter((student) => student.studentId !== studentId);
    setStudents(updatedStudents);
  };
  

  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentName}</td>
              <td>{student.emailId}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.fatherName}</td>
              <td>{student.gender}</td>
              <td>
                <button onClick={() => handleDelete(student.studentId)} className="delete-button">Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
