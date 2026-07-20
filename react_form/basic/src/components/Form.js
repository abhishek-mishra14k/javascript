import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    if (formData.name===""){
      alert("input field required....");
      return;
      
    }
    if (formData.email===""){
      alert("input field required....");
      return;

    }
console.log(formData);
alert("Form submitted successfully.....")
    // console.log(`Name: ${formData.name}`);
    // console.log(`Email: ${formData.email}`);
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={submitHandler}>
        <label>User Name: </label>
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

        <label>Email: </label>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}