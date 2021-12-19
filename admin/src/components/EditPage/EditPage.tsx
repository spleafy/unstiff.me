import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./EditPage.scss";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const schema = yup.object().shape({
    "post-name": yup.string().required("This field is required!"),
  });

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const post = await fetch(`http://localhost:9090/post/${postId}`);

      const data = await post.json();

      setPost(data.data.post);
    };

    getPost();
  }, []);

  const [post, setPost]: any = useState({
    name: "",
    interview: {
      title: "",
      description: "",
      subtitle: "",
      audioURL: "",
    },
    recipe: {
      title: "",
      description: "",
      audioURL: "",
    },
    movement: {
      title: "",
      description: "",
      audioURL: "",
    },
    sutra: {
      title: "",
      description: "",
      audioURL: "",
    },
  });

  return (
    <>
      <Navbar />
      <div className="ue-admin-page">
        <Formik
          initialValues={{
            "post-name": post.name,
            "interview-title": post.interview ? post.interview.title : "",
            "interview-subtitle": post.interview ? post.interview.subtitle : "",
            "interview-description": post.interview
              ? post.interview.description
              : "",
            "interview-audio-url": post.interview
              ? post.interview.audioURL
              : "",
            "interview-type": "interview",
            "recipe-title": post.recipe ? post.recipe.title : "",
            "recipe-description": post.recipe ? post.recipe.description : "",
            "recipe-audio-url": post.recipe ? post.recipe.audioURL : "",
            "recipe-type": "recipe",
            "movement-title": post.movement ? post.movement.title : "",
            "movement-description": post.movement
              ? post.movement.description
              : "",
            "movement-audio-url": post.movement ? post.movement.audioURL : "",
            "movement-type": "movement",
            "sutra-title": post.sutra ? post.sutra.title : "",
            "sutra-description": post.sutra ? post.sutra.description : "",
            "sutra-audio-url": post.sutra ? post.sutra.audioURL : "",
            "sutra-type": "sutra",
          }}
          enableReinitialize={true}
          validationSchema={schema}
          onSubmit={async (values) => {}}
        >
          {(props) => (
            <form
              action={"http://localhost:9090/post/" + postId}
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

export default EditPage;
