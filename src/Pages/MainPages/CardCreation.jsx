import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 50px 20px;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

function CardCreation() {
  const [form, setForm] = useState({
    title: "",
    message: "",
    template: "default",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Data:", form);
    alert("Card Created!");
  };

  return (
    <FormContainer>
      <h1>Create a New Card</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title">Card Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter card title"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="template">Template</label>
          <select
            id="template"
            name="template"
            value={form.template}
            onChange={handleChange}
          >
            <option value="default">Default</option>
            <option value="birthday">Birthday</option>
            <option value="thank-you">Thank You</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </FormGroup>
        <SubmitButton type="submit">Create Card</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default CardCreation;
