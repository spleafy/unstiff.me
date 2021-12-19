import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Post from "../Post/Post";
import "./CreatePage.scss";

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
            <form
              action="http://localhost:9090/post"
              method="POST"
              encType="multipart/form-data"
            >
              <div>
                <div>
                  <h1>Post</h1>
                  <label htmlFor="post-name">Name:</label>
                  <Field
                    name="post-name"
                    type="text"
                    placeholder="Enter name:"
                  />
                  <ErrorMessage name="post-name" />
                  <h1>Interview</h1>
                  <label htmlFor="interview-title">Title:</label>
                  <Field
                    name="interview-title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="interview-subtitle">Subtitle:</label>
                  <Field
                    name="interview-subtitle"
                    type="text"
                    placeholder="Enter subtitle:"
                  />
                  <label htmlFor="interview-description">Description:</label>
                  <Field
                    name="interview-description"
                    type="text"
                    placeholder="Enter description:"
                    as="textarea"
                    spellCheck="false"
                  />
                  <label htmlFor="interview-audio-url">Audio URL:</label>
                  <Field
                    name="interview-audio-url"
                    type="text"
                    placeholder="Enter audio URL:"
                  />

                  <div className="select-file-box">
                    <label
                      htmlFor="interview-person-image"
                      className="input-file-label"
                    >
                      Select Person Image
                    </label>
                    <input
                      type="file"
                      name="interview-person-image"
                      id="interview-person-image"
                    />
                    <label
                      htmlFor="interview-header-image"
                      className="input-file-label"
                    >
                      Select Header Image
                    </label>
                    <input
                      type="file"
                      name="interview-header-image"
                      id="interview-header-image"
                    />
                  </div>
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values["interview-title"]}
                    subtitle={props.values["interview-subtitle"]}
                    description={props.values["interview-description"]}
                    type={props.values["interview-type"]}
                    audioURL={props.values["interview-audio-url"]}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Recipe</h1>
                  <label htmlFor="recipe-title">Title:</label>
                  <Field
                    name="recipe-title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="recipe-description">Description:</label>
                  <Field
                    name="recipe-description"
                    type="text"
                    placeholder="Enter description:"
                    as="textarea"
                    spellCheck="false"
                  />
                  <label htmlFor="recipe-audio-url">Audio URL:</label>
                  <Field
                    name="recipe-audio-url"
                    type="text"
                    placeholder="Enter audio URL:"
                  />
                  <div className="select-file-box">
                    <label
                      htmlFor="recipe-header-image"
                      className="input-file-label"
                    >
                      Select Header Image
                    </label>
                    <input
                      type="file"
                      name="recipe-header-image"
                      id="recipe-header-image"
                    />
                    <div />
                  </div>
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values["recipe-title"]}
                    description={""}
                    type={props.values["recipe-type"]}
                    audioURL={props.values["recipe-audio-url"]}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Movement</h1>
                  <label htmlFor="movement-title">Title:</label>
                  <Field
                    name="movement-title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="movement-description">Description:</label>
                  <Field
                    name="movement-description"
                    type="text"
                    placeholder="Enter description:"
                    as="textarea"
                    spellCheck="false"
                  />
                  <label htmlFor="movement-audio-url">Audio URL:</label>
                  <Field
                    name="movement-audio-url"
                    type="text"
                    placeholder="Enter audio URL:"
                  />
                  <div className="select-file-box">
                    <label
                      htmlFor="movement-header-image"
                      className="input-file-label"
                    >
                      Select Header Image
                    </label>
                    <input
                      type="file"
                      name="movement-header-image"
                      id="movement-header-image"
                    />
                  </div>
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values["movement-title"]}
                    description={""}
                    type={props.values["movement-type"]}
                    audioURL={props.values["movement-audio-url"]}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Sutra</h1>
                  <label htmlFor="sutra-title">Title:</label>
                  <Field
                    name="sutra-title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="sutra-description">Description:</label>
                  <Field
                    name="sutra-description"
                    type="text"
                    placeholder="Enter description:"
                    as="textarea"
                    spellCheck="false"
                  />
                  <label htmlFor="sutra-audio-url">Audio URL:</label>
                  <Field
                    name="sutra-audio-url"
                    type="text"
                    placeholder="Enter audio URL:"
                  />
                  <div className="select-file-box">
                    <label
                      htmlFor="sutra-header-image"
                      className="input-file-label"
                    >
                      Select Header Image
                    </label>
                    <input
                      type="file"
                      name="sutra-header-image"
                      id="sutra-header-image"
                    />
                  </div>
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values["sutra-title"]}
                    description={""}
                    type={props.values["sutra-type"]}
                    audioURL={props.values["sutra-audio-url"]}
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreatePage;
