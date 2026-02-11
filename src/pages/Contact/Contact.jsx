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

import messages from '../../message/GlobalMessage.message';

import './Contact.scss';

const Contact = () => {
  const { formatMessage } = useIntl();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add real form submission logic (API call, etc.)
    console.log('Form submitted:', formData);
    // Reset form after submit (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      {/* Hero / Banner Section */}
      <section className="py-6">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="page-mapped text-muted small mb-3">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['contact.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{formatMessage(messages['contact.breadcrumb.contact'])}</span>
          </nav>

          {/* Title & Subtitle */}
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
                <span className="mb-4 badge bg-light text-primary">{formatMessage(messages['contact.info.heading'])}</span>
                <h3 className="mb-4 contact-info-subheading">
                  {formatMessage(messages['contact.info.subheading'])}
                </h3>
                <p className="text-muted mb-5 contact-info-description">
                  {formatMessage(messages['contact.info.description'])}
                </p>

                <div className="d-flex flex-column gap-4">
                  {/* Address */}
                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">{formatMessage(messages['contact.info.address.title'])}</h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.address.text'])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">{formatMessage(messages['contact.info.email.title'])}</h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.email.text'])}</span>
                        <span>{formatMessage(messages['contact.info.email.text'])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-center mb-2 p-4 contact-info">
                    <FontAwesomeIcon icon={faPhone} className="text-primary mr-4" />
                    <div>
                      <h5 className="mb-1 contact-details-heading">{formatMessage(messages['contact.info.phone.title'])}</h5>
                      <div className="text-muted small mb-0 d-flex flex-column contact-detail-data">
                        <span>{formatMessage(messages['contact.info.phone.text'])}</span>
                        <span>{formatMessage(messages['contact.info.phone.text'])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="col-lg-6">
              <div className="card p-4 rounded">
                <h3 className="mb-4 contact-form-heading">{formatMessage(messages['contact.form.heading'])}</h3>

                <Form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <Form.Group>
                        <Form.Label>
                          {formatMessage(messages['contact.form.name.label'])}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={formatMessage(messages['contact.form.name.placeholder'])}
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

                    {/* Subject */}
                    <div className="col-md-6">
                      <Form.Group>
                        <Form.Label>
                          {formatMessage(messages['contact.form.subject.label'])}
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            {formatMessage(messages['contact.form.subject.placeholder'])}
                          </option>
                          <option value="general">
                            {formatMessage(messages['contact.form.subject.general'])}
                          </option>
                          <option value="courses">
                            {formatMessage(messages['contact.form.subject.courses'])}
                          </option>
                          <option value="support">
                            {formatMessage(messages['contact.form.subject.support'])}
                          </option>
                          <option value="partnership">
                            {formatMessage(messages['contact.form.subject.partnership'])}
                          </option>
                        </Form.Control>
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
                  </div>

                  <Button variant="primary" type="submit" className="mt-4 py-3 w-100">
                    {formatMessage(messages['contact.form.submit'])}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-5">
        <div className="container">
          <div className="card overflow-hidden position-relative">
            {/* Fullscreen Toggle Button */}
            <button
              type="button"
              className="map-fullscreen-toggle-button position-absolute m-3 btn btn-light rounded-circle p-2 shadow-sm"
              onClick={() => setIsMapFullscreen(true)}
              title="Fullscreen Map"
              aria-label="Open map in fullscreen"
            >
              <FontAwesomeIcon icon={faExpandAlt} className="text-muted" />
            </button>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9417433957946!2d77.20900817550052!3d28.632743475662474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VigyanShaala Location"
            />
          </div>
        </div>
      </section>

      {/* Fullscreen Map Modal */}
      {isMapFullscreen && (
        <div
          className="full-screen-map"
        >
          <button
            type="button"
            className="position-absolute m-4 btn btn-light rounded-circle p-3 shadow"
            onClick={() => setIsMapFullscreen(false)}
            aria-label="Close fullscreen map"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="w-100 d-flex align-items-center justify-content-center h-100 rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9417433957946!2d77.20900817550052!3d28.632743475662474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="80%"
              height="75%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VigyanShaala Location Fullscreen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;