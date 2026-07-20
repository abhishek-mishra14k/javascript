// Student Registration Form

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Handle input changes
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(" student registred successful...")

  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={submitHandler}>
        <label>User Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          value={formData.age}
          onChange={changeHandler}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}