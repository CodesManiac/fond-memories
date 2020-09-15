import React from "react";
import { Container } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form } from "formik";

function Help() {
  return (
    <Formik
      initialValues={{ userName: "", email: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.userName) {
          errors.userName = "Required";
        } else if (values.userName.length < 2) {
          errors.email = "Please enter a valid name";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Please enter a valid email address";
        }
        if (!values.message) {
          errors.message = "Required";
        } else if (values.message.length < 3) {
          errors.message = "Your message should be lenghty";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
        alert(`Hi ${values.userName} your message has been submitted, we'll get back to you very soon.thanks`)
      }}
    >
      {({ isSubmitting }) => (
        <div id="helpBody">
          <Container>
            <div>
              <h1>Need Help?</h1>
            </div>
            <div>
              <Form>
                <h4>Write to us</h4>
                <Field type="text" name="userName" placeholder="Name" /><br/>
                <ErrorMessage name="userName" component="div" />
                <Field type="email" name="email" placeholder="Email Address" /><br/>
                <ErrorMessage name="email" component="div" />
                <Field component="textarea" name="message" placeholder="Message" /><br/>
                <ErrorMessage name="message" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            </div>
          </Container>
        </div>
      )}
    </Formik>
  );
}

export default Help;
