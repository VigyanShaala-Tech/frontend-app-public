import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Form, Spinner, Alert } from '@openedx/paragon';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';

import messages from '../../message/GlobalMessage.message';

import './Contact.scss';

const Contact = () => {
  const { formatMessage } = useIntl();
  const { config } = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const RECAPTCHA_SITE_KEY = config.RECAPTCHA_SITE_KEY;

  const validateField = (name, value) => {
    if (!value.trim()) {
      return formatMessage(messages['contact.form.required'] || 'This field is required');
    }

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return formatMessage(messages['contact.form.email.invalid'] || 'Please enter a valid email address');
    }

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (digits.length === 0) {
        return formatMessage(messages['contact.form.phone.required'] || 'Phone number is required');
      }
      if (digits.length < 7 || digits.length > 15) {
        return formatMessage(messages['contact.form.phone.invalid'] || 'Please enter a valid phone number (7-15 digits)');
      }
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'phone') {
      processedValue = value.replace(/\D/g, '');
    }

    setFormData({ ...formData, [name]: processedValue });

    // Real-time validation
    const error = validateField(name, processedValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);

    if (!isValid) return;

    if (!recaptchaToken) {
      setRecaptchaError(formatMessage(messages['contact.form.captcha.required']));
      return;
    }

    setSubmitLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const payload = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      recaptcha_token: recaptchaToken,
    };

    try {
      const httpClient = getAuthenticatedHttpClient();

      const response = await httpClient.post(
        `${getConfig().LMS_BASE_URL}/api/v1/contact-us/`,
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (err) {
      console.error('Contact form submission failed:', err);

      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.non_field_errors?.[0] ||
        formatMessage(messages['contact.form.submit.error']);

      setSubmitError(errorMsg);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Form is valid only when all fields have no errors + CAPTCHA done
  const isFormValid = () =>
    Object.values(errors).every((err) => !err) &&
    Object.values(formData).every((val) => val.trim() !== '') &&
    !!recaptchaToken;

  return (
    <div className="contact-page">
      {/* Hero / Banner */}
      <section className="banner">
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
      <section className="main-content">
        <div className="container">
          <div className="row g-5">
            {/* Left - Contact Info */}
            <div className="col-lg-6">
              <div className="mb-5 mr-4">
                <span className="mb-4 badge text-primary">
                  {formatMessage(messages['contact.info.heading'])}
                </span>
                <h3 className="mb-4 contact-info-subheading">
                  {formatMessage(messages['contact.info.subheading'])}
                </h3>
                <p className="text-muted mb-5 contact-info-description">
                  {formatMessage(messages['contact.info.description'])}
                </p>

                <div className="d-flex flex-column gap-4">
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

                {submitSuccess ? (
                  <Alert variant="success" className="text-center py-4">
                    <strong>{formatMessage(messages['contact.form.success.title'])}</strong>
                    <br />
                    <small>{formatMessage(messages['contact.form.success.message'])}</small>
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit} noValidate>
                    {submitError && (
                      <Alert variant="danger" dismissible onClose={() => setSubmitError('')} className="mb-4">
                        {submitError}
                      </Alert>
                    )}

                    <div className="row g-3">
                      {/* First Name */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>{formatMessage(messages['contact.form.firstName.label'])}</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.firstName.placeholder'])}
                            isInvalid={!!errors.firstName}
                            required
                          />
                          {errors.firstName && (
                            <Form.Text className="text-danger">{errors.firstName}</Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>{formatMessage(messages['contact.form.lastName.label'])}</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.lastName.placeholder'])}
                            isInvalid={!!errors.lastName}
                            required
                          />
                          {errors.lastName && (
                            <Form.Text className="text-danger">{errors.lastName}</Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>{formatMessage(messages['contact.form.email.label'])}</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.email.placeholder'])}
                            isInvalid={!!errors.email}
                            required
                          />
                          {errors.email && (
                            <Form.Text className="text-danger">{errors.email}</Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      {/* Phone - Required */}
                      <div className="col-md-6">
                        <Form.Group>
                          <Form.Label>{formatMessage(messages['contact.form.phone.label'])}</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.phone.placeholder'])}
                            isInvalid={!!errors.phone}
                            required
                          />
                          {errors.phone && (
                            <Form.Text className="text-danger">{errors.phone}</Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <Form.Group>
                          <Form.Label>{formatMessage(messages['contact.form.message.label'])}</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={formatMessage(messages['contact.form.message.placeholder'])}
                            isInvalid={!!errors.message}
                            required
                          />
                          {errors.message && (
                            <Form.Text className="text-danger">{errors.message}</Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="col-12 mt-4">
                        <ReCAPTCHA
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          onExpired={() => setRecaptchaToken(null)}
                        />
                        {recaptchaError && (
                          <div className="text-danger mt-2 small fw-medium">{recaptchaError}</div>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-4 py-3 w-100"
                      disabled={submitLoading || !isFormValid()}
                    >
                      {submitLoading ? (
                        <>
                          <Spinner animation="border" size="sm" className="mr-2" />
                          {formatMessage(messages['contact.form.submitting'])}
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
                          {formatMessage(messages['contact.form.submit'])}
                        </>
                      )}
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