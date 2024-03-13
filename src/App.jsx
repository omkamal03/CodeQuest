import React, { useState } from 'react';

const all_students = [
    {
        name: "Om kamal",
        regNo: "22105131001",
        rollNo: "22505",
        branch: "C.S.E",
        year: "2022-26",
        field: "Hackathon"
    },
    {
        name: "Prince kr Gupta",
        regNo: "22105131017",
        rollNo: "22506",
        branch: "C.S.E",
        year: "2022-26",
        field: "Hackathon"
    },
    {
        name: "Reshav Raj",
        regNo: "22105131014",
        rollNo: "22523",
        branch: "C.S.E",
        year: "2022-26",
        field: "Hackathon"
    },
    {
        name: "Raushan kumar",
        regNo: "22105131011",
        rollNo: "22511",
        branch: "C.S.E(AI)",
        year: "2022-26",
        field: "Hackathon"
    },
    {
        name: "Vishwajit singh",
        regNo: "22105131021",
        rollNo: "22501",
        branch: "C.S.E",
        year: "2022-26",
        field: "Hackathon"
    }
];

function App() {
    const [selectedField, setSelectedField] = useState("");
    const [selectedStudents, setSelectedStudents] = useState([]);

    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
        const filteredStudents = all_students.filter(student => student.field === e.target.value);
        setSelectedStudents(filteredStudents);
    };

    return (
        <div>
            <h1>Select Students by Field</h1>
            <label htmlFor="fieldSelect">Select Field:</label>
            <select id="fieldSelect" value={selectedField} onChange={handleFieldChange}>
                <option value="">Select Field</option>
                <option value="Hackathon">Hackathon</option>
                {/* Add more options for other fields if needed */}
            </select>
            <div>
                <h2>Selected Students:</h2>
                <ul>
                    {selectedStudents.map(student => (
                        <li key={student.regNo}>{student.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
