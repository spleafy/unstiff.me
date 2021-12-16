import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../Forms.scss";
import { useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";

const LoginForm = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("This field is required!")
      .min(4, "Username should be at least 4 characters"),
    password: yup.string().required("This field is required!"),
    // .min(8, "Password must be at least 8 characters!"),
  });

  const createFormData = (obj: any) => {
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
      formData.append(key, obj[key]);
    });
    return formData;
  };

  const [errors, setErrors] = useState([""]);

  return (
    <>
      <div className="ue-errors">
        {errors.map((error, index) =>
          error.length > 0 ? <ErrorBox key={index} message={error} /> : ""
        )}
      </div>
      <div className="accounts-form">
        <h1>
          Unstiff<span>.</span>me
        </h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            const response = await fetch("http://localhost:9090/login", {
              method: "POST",
              headers: { enctype: "multipart/form-data" },
              body: createFormData(values),
            }).then((response) => response.json());
            if (response.data.login === false) {
              setErrors([...errors, "Invalid Credentials"]);
            } else {
            }
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
    </>
  );
};

export default LoginForm;
