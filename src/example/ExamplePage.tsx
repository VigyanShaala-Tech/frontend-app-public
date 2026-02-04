import React, { useState } from 'react';
import { Form, Button, StatefulButton } from '@openedx/paragon';

const ExamplePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setIsSaving(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <h2 className="mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '500px' }}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="message" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows={4}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <StatefulButton
            state={isSaving ? 'pending' : 'default'}
            labels={{
              default: 'Submit',
              pending: 'Submitting...',
            }}
            type="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default ExamplePage;
