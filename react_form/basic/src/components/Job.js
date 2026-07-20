import { useState } from "react";

export default function Job() {
  const [jobData, setJobData] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    salary: "",
  });

  const changeHandler = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (jobData.employeeId === "") {
      alert("Employee ID is required");
      return;
    }

    if (jobData.employeeName === "") {
      alert("Employee Name is required");
      return;
    }

    if (jobData.department === "") {
      alert("Please select a Department");
      return;
    }

    if (jobData.salary === "") {
      alert("Employee Salary is required");
      return;
    }

    console.log(jobData);
    alert("Employee details submitted successfully");

    setJobData({
      employeeId: "",
      employeeName: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div>
      <h2>Employee Registration Form</h2>

      <form onSubmit={submitHandler}>

        <label>Employee ID:</label>
        <br />
        <input
          type="number"
          name="employeeId"
          placeholder="Enter Employee ID"
          value={jobData.employeeId}
          onChange={changeHandler}
        />
        <br /><br />

        <label>Employee Name:</label>
        <br />
        <input
          type="text"
          name="employeeName"
          placeholder="Enter Employee Name"
          value={jobData.employeeName}
          onChange={changeHandler}
        />
        <br /><br />

        <label>Department:</label>
        <br />
        <select
          name="department"
          value={jobData.department}
          onChange={changeHandler}
        >
          <option value="">-- Select Department --</option>
          <option value="App Development">App Development</option>
          <option value="Web Development">Web Development</option>
          <option value="Gen AI">Gen AI</option>
        </select>
        <br /><br />

        <label>Employee Salary:</label>
        <br />
        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          value={jobData.salary}
          onChange={changeHandler}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}