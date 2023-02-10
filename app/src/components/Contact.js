import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //code to submit form data
    setFormData({ name: '', email: '', comment: '' });
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form col-6 p-3 text-center" action="https://formsubmit.co/benyomtov@comcast.net" method="POST" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input className="form-control"
          value={formData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
        <label className="form-label p-2">Email</label>
        <input className="form-control"
          value={formData.email}
          name="email"
          type="text"
          required
          onChange={handleChange}
        />
        <label className="form-text">I'll never share your email.</label>
        <br></br>
        <label className="form-label">Comment</label>
        <textarea className="form-control h-100"
          value={formData.comment}
          name="comment"
          type="textarea"
          required
          onChange={handleChange}></textarea>
        <button className="btn btn-primary m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;