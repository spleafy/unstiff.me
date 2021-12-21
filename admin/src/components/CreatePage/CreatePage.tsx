import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Post from "../Post/Post";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

const CreatePage = () => {
  const schema = yup.object().shape({
    "post-name": yup.string().required("This field is required!"),
    // "interview-title": yup.string().required("This field is required!"),
    // "interview-subtitle": yup.string().required("This field is required!"),
    // "interview-description": yup.string().required("This field is required!"),
    // "interview-audio-url": yup.string().required("This field is required!"),
    // "recipe-title": yup.string()
  });

  return (
    <>
      <Navbar />
      <div className="ue-admin-page">
        <Formik
          initialValues={{
            "post-name": "",
            "interview-title": "",
            "interview-subtitle": "",
            "interview-description": "",
            "interview-audio-url": "",
            "interview-type": "interview",
            "recipe-title": "",
            "recipe-description": "",
            "recipe-audio-url": "",
            "recipe-type": "recipe",
            "movement-title": "",
            "movement-description": "",
            "movement-audio-url": "",
            "movement-type": "movement",
            "sutra-title": "",
            "sutra-description": "",
            "sutra-audio-url": "",
            "sutra-type": "sutra",
          }}
          validationSchema={schema}
          onSubmit={async (values) => {}}
        >
          {(props) => (
            <CreateEditForm
              props={props}
              url={"http://localhost:9090/post"}
              method={"POST"}
            />
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreatePage;
