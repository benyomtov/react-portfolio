import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [ nameError, setNameError] = useState('');
  const [ emailError, setEmailError] = useState('');
  const [ commentError, setCommentError] = useState('');

  const [ form, formSubmit ] = useForm("meqwzbyw");

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
    formSubmit(event);
    setFormData({ name: '', email: '', comment: '' });
  };

  return (
    <div style={{ height: "40rem" }} className="mt-5 d-flex flex-column align-items-center">
        <h1 style={{ fontFamily: "Fredoka One" }} className='display-5 text-center'>Contact Me:</h1>
      <form action="https://formspree.io/f/meqwzbyw" method="POST" className="form col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-7 col-9 p-3 text-center" onSubmit={handleSubmit}>
        <label className="lead p-2">Name</label>
        <input className="form-control"
          style={{ border: "2px solid #12294d"}}
          value={formData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleNameBlur}
        />
        <label className="lead p-2">Email</label>
        <input className="form-control"
          style={{ border: "2px solid #12294d"}}
          value={formData.email}
          name="email"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleEmailBlur}
        />
        <label className="form-text">I'll never share your email.</label>
        <br></br>
        <label className="lead p-2">Comment</label>
        <textarea className="form-control"
          value={formData.comment}
          name="comment"
          type="textarea"
          style={{ border: "2px solid #12294d"}}
          required
          onChange={handleChange}
          onBlur={handleCommentBlur}></textarea>
        <button className="btn btn-primary m-4" type="submit">
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