import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { checkUserState } from "../services/checkUserState";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Loader from "../Loader/Loader";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./SettingsPage.scss";

const SettingsPage = () => {
  const [loading, setLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const effect = async () => {
      await checkUserState(navigate, setLoggedIn);
      setLoading(false);
    };

    effect();
  }, []);

  const usernameSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Username should be at least 4 characters!")
      .required("This field is required!"),
    password: yup
      .string()
      .min(4, "Password should be at least 4 characters!")
      .required("This field is required"),
  });

  const passwordSchema = yup.object().shape({
    newpassword: yup
      .string()
      .min(4, "Username should be at least 4 characters!")
      .required("This field is required!"),
    oldpassword: yup
      .string()
      .min(4, "Password should be at least 4 characters!")
      .required("This field is required"),
  });

  const createFormData = (obj: any) => {
    const formData = new FormData();

    Object.keys(obj).forEach((key) => {
      formData.append(key, obj[key]);
    });

    return formData;
  };

  return (
    <>
      <Loader loading={loading} />
      {loggedIn ? (
        <>
          <Navbar />
          <div className="ue-settings-page">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={usernameSchema}
              onSubmit={async (values) => {
                const token = "Bearer " + localStorage.getItem("token");

                const response = await fetch(
                  `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}/user/username`,
                  {
                    method: "PUT",
                    body: createFormData(values),
                    headers: {
                      authorization: token,
                    },
                  }
                );

                const data = await response.json();

                if (data.status == 401) {
                } else {
                }
              }}
            >
              {(props) => (
                <Form>
                  <h1>Change Username</h1>
                  <label htmlFor="username">New Username</label>
                  <Field name="username" placeholder="Enter new username:" />
                  <div className="ue-admin-error">
                    <ErrorMessage name="username" />
                  </div>
                  <label htmlFor="password">Current Password</label>
                  <Field
                    name="password"
                    placeholder="Enter current password:"
                  />
                  <div className="ue-admin-error">
                    <ErrorMessage name="password" />
                  </div>
                  <button type="submit">Change Username</button>
                </Form>
              )}
            </Formik>
            <Formik
              initialValues={{
                newpassword: "",
                oldpassword: "",
              }}
              validationSchema={passwordSchema}
              onSubmit={async (values) => {
                const token = "Bearer " + localStorage.getItem("token");

                const response = await fetch(
                  `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}`,
                  {
                    method: "PUT",
                    body: createFormData(values),
                    headers: {
                      authorization: token,
                    },
                  }
                );

                const data = await response.json();

                if (data.status == 401) {
                } else {
                }
              }}
            >
              {(props) => (
                <Form>
                  <h1>Change Password</h1>
                  <label htmlFor="newpassword">New Password</label>
                  <Field name="newpassword" placeholder="Enter new password:" />
                  <div className="ue-admin-error">
                    <ErrorMessage name="newpassword" />
                  </div>
                  <label htmlFor="oldpassword">Current Password</label>
                  <Field
                    name="oldpassword"
                    placeholder="Enter current password:"
                  />
                  <div className="ue-admin-error">
                    <ErrorMessage name="oldpassword" />
                  </div>
                  <button type="submit">Change Password</button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingsPage;
