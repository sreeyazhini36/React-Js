import React, { useState } from 'react'

const MyForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      // Step 3: Create a function to handle form data changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Step 4: Create a function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("form submitted succesfully  "+ formData.username+"  "+formData.email)
        // Step 5: Process the form data (e.g., send it to the server, perform actions)
        console.log('Form submitted:', formData);
        // Additional logic: make API calls, perform validation, etc.
      };
  return (
    
        <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
  )
}

export default MyForm