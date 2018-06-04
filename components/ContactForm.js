import dynamic from 'next/dynamic';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withFormik } from 'formik';
import Yup from 'yup';

const alertify = dynamic(import('alertify.js'), { ssr: false });

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className={`field ${errors.name && touched.name && 'error'}`}>
        <label>Full name</label>
        <input
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className={`field ${errors.email && touched.email && 'error'}`}>
        <label>Your Email</label>
        <input
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className={`field ${errors.message && touched.message && 'error'}`}>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <button
        type="submit"
        className="ui submit button"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ContactFormFormik = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.addContact(values);
    setSubmitting(false);
  },
  displayName: 'ContactUs', // helps with React DevTools
})(ContactForm);

const addContactMutation = gql`
  mutation addContactMutation($name: String, $email: String, $message: String) {
    addContact(input: { name: $name, email: $email, message: $message }) {
      id
      name
      email
      message
    }
  }
`;

export default compose( // eslint-disable-line
  graphql(addContactMutation, {
    name: 'addContact',
    props: ({ ownProps, addContact }) => ({
      addContact: contactInput => {
        addContact({
          variables: contactInput,
        })
          .then(result => {
            console.log('result', result);
            alertify.alert('Contact form sent successfully');
          })
          .catch(error => {
            console.log('error', error);
            alertify.error(error);
          });
      },
    }),
  }),  // eslint-disable-line
)(ContactFormFormik); // eslint-disable-line
