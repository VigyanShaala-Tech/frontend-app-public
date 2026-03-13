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
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{height:"82vh", fontSize:"85px"}}>
      <h1 className="mb-4" style={{fontSize:"85px"}}>Example page</h1>
    </div>
  );
};

export default ExamplePage;
