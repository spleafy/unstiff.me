import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useParams, Link } from "react-router-dom";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

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
        {post ? (
          <Formik
            initialValues={{
              "post-name": post.name,
              "interview-title": post.interview ? post.interview.title : "",
              "interview-subtitle": post.interview
                ? post.interview.subtitle
                : "",
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
              <CreateEditForm
                props={props}
                url={"http://localhost:9090/post/" + postId}
                method={"POST"}
              />
            )}
          </Formik>
        ) : (
          <h1 style={{ textAlign: "center", width: "100%" }}>
            This post does not exist!
            <Link to="/admin" style={{ marginLeft: "20px", fontSize: "20pt" }}>
              Go back to home!
            </Link>
          </h1>
        )}
      </div>
    </>
  );
};

export default EditPage;
