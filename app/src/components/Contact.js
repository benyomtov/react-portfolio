import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [ nameError, setNameError] = useState('');
  const [ emailError, setEmailError] = useState('');
  const [ commentError, setCommentError] = useState('');

  const handleNameBlur = () => {
    if (formData.name === '') {
      setNameError('The name field is required');
    } else 
      setNameError('');
  }

  const handleEmailBlur = () => {
    if (formData.email === '') {
      setEmailError('The email field is required');
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handleCommentBlur = () => {
    if (formData.comment === '') {
      setCommentError('The comment field is required');
    } else 
      setCommentError('');
  }

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
    <div className="d-flex flex-column align-items-center">
        <h1 className='display-5 text-center'>Contact Me:</h1>
      <form className="form col-6 p-3 text-center" action="https://formsubmit.co/benyomtov@comcast.net" method="POST" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input className="form-control"
          value={formData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleNameBlur}
        />
        <label className="form-label p-2">Email</label>
        <input className="form-control"
          value={formData.email}
          name="email"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleEmailBlur}
        />
        <label className="form-text">I'll never share your email.</label>
        <br></br>
        <label className="form-label">Comment</label>
        <textarea className="form-control h-100"
          value={formData.comment}
          name="comment"
          type="textarea"
          required
          onChange={handleChange}
          onBlur={handleCommentBlur}></textarea>
        <button className="btn btn-primary m-2" type="submit">
          Submit
        </button>
       {nameError && <h1 className="lead">{nameError}</h1>}
       {emailError && <h1 className="lead">{emailError}</h1>}
       {commentError && <h1 className="lead">{commentError}</h1>}
      </form>
    </div>
  );
}

export default Form;