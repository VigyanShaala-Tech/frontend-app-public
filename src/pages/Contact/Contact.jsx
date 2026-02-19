import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Form } from '@openedx/paragon';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faExpandAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import messages from '../../message/GlobalMessage.message';

import './Contact.scss';

const Contact = () => {
  const { formatMessage } = useIntl();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Replace with your actual reCAPTCHA v2 site key
  const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // ← DEMO / TEST KEY (always passes)
  // In production: use your real site key from Google reCAPTCHA admin

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError(''); // clear error when user interacts
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setRecaptchaError(
        formatMessage(messages['contact.form.captcha.required'] || 'Please complete the CAPTCHA verification')
      );
      return;
    }

    // Here you would send data + token to your backend
    const payload = {
      ...formData,
      recaptchaToken,
    };

    console.log('Form data to send:', payload);
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })

    // On success (simulate):
    setFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setRecaptchaToken(null); // reset reCAPTCHA

    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <div className="contact-page">
      {/* Hero / Banner Section */}
      <section className="py-6">
        <div className="container">
          <nav className="page-mapped text-muted small mb-3">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['contact.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{formatMessage(messages['contact.breadcrumb.contact'])}</span>
          </nav>

          <h2 className="mb-3">{formatMessage(messages['contact.title'])}</h2>
          <p className="lead text-muted mb-5">{formatMessage(messages['contact.subtitle'])}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left - Contact Info */}
            <div className="col-lg-6">
              <div className="mb-5 mr-4">
                <span className="mb-4 badge bg-light text-primary">
                  {formatMessage(messages['contact.info.heading'])}
                </span>
                <h3 className="mb-4 contact-info-subheading">
                  {formatMessage(messages['contact.info.subheading'])}
                </h3>
                <p className="text-muted mb-5 contact-info-description">
                  {formatMessage(messages['contact.info.description'])}
                </p>

                <div className="d-flex flex-column gap-4">
                  {/* Address, Email, Phone blocks remain the same */}
                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">
                        {formatMessage(messages['contact.info.address.title'])}
                      </h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.address.text'])}</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">
                        {formatMessage(messages['contact.info.email.title'])}
                      </h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.email.text'])}</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faPhone} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">
                        {formatMessage(messages['contact.info.phone.title'])}
                      </h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.phone.text'])}</span>
                        <span>{formatMessage(messages['contact.info.phone.text-2'])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="col-lg-6">
              <div className="card p-4 rounded shadow-sm">
                <h3 className="mb-4 contact-form-heading">
                  {formatMessage(messages['contact.form.heading'])}
                </h3>

                {formSubmitted ? (
                  <div className="alert alert-success text-center py-4">
                    <strong>Thank you!</strong> Your message has been sent successfully.
                    <br />
                    <small>We will get back to you soon.</small>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* First Name */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>
                            {formatMessage(messages['contact.form.firstName.label'])}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.firstName.placeholder'])}
                            required
                          />
                        </Form.Group>
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>
                            {formatMessage(messages['contact.form.lastName.label'])}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.lastName.placeholder'])}
                            required
                          />
                        </Form.Group>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>
                            {formatMessage(messages['contact.form.email.label'])}
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.email.placeholder'])}
                            required
                          />
                        </Form.Group>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>
                            {formatMessage(messages['contact.form.phone.label'])}
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.phone.placeholder'])}
                          />
                        </Form.Group>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <Form.Group>
                          <Form.Label>
                            {formatMessage(messages['contact.form.message.label'])}
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.message.placeholder'])}
                            required
                          />
                        </Form.Group>
                      </div>

                      {/* reCAPTCHA - I'm not a robot */}
                      <div className="col-12 mt-4">
                        <ReCAPTCHA
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          onExpired={() => setRecaptchaToken(null)}
                        />
                        {recaptchaError && (
                          <div className="text-danger mt-2 small fw-medium">
                            {recaptchaError}
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-4 py-3 w-100"
                      disabled={!recaptchaToken}
                    >
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
                      {formatMessage(messages['contact.form.submit'])}
                    </Button>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;