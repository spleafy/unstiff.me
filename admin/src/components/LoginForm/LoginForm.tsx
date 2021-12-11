import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../Forms.scss";

const LoginForm = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("This field is required!")
      .min(4, "Username should be at least 4 characters"),
    password: yup.string().required("This field is required!"),
    // .min(8, "Password must be at least 8 characters!"),
  });

  return (
    <div className="accounts-form">
      <h1>
        Unstiff<span>.</span>me
      </h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const response = await fetch("http://localhost:9090/login", {
            method: "POST",
            body: JSON.stringify(values),
          }).then((response) => response.json());
          console.log(response);
        }}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="username">Username:</label>
          <Field
            id="username"
            name="username"
            type="text"
            placeholder="Enter username:"
          />
          <div className="accounts-form__errors">
            <ErrorMessage name="username" />
          </div>
          <label htmlFor="password">Password:</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Enter password:"
          />
          <div className="accounts-form__errors">
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
