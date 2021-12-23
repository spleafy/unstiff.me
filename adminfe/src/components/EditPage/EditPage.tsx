import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

const EditPage = () => {
  const schema = yup.object().shape({
    "post-name": yup.string().required("This field is required!"),
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUserState = async () => {
      const token = "Bearer " + localStorage.getItem("token");

      const response = await fetch("http://dockerpi.asuscomm.com:9090/user", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();

      if (data.data.id.length > 0 && data.status == 200) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        navigate("/");
      }
    };

    checkUserState();
  }, []);

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const token = "Bearer " + localStorage.getItem("token");

      const post = await fetch(
        `http://dockerpi.asuscomm.com:9090/post/${postId}`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );

      const data = await post.json();

      console.log(data);

      if (data.status == 200) {
        setPost(data.data.post);
      } else {
        navigate("/");
      }
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
      imgSource: "",
      headingImgSource: "",
    },
    recipe: {
      title: "",
      description: "",
      audioURL: "",
      headingImgSource: "",
    },
    movement: {
      title: "",
      description: "",
      audioURL: "",
      headingImgSource: "",
    },
    sutra: {
      title: "",
      description: "",
      audioURL: "",
      headingImgSource: "",
    },
  });

  return (
    <>
      {loggedIn ? (
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
                  "interview-person-image": post.interview
                    ? post.interview.imgSource
                    : "",
                  "interview-heading-image": post.interview
                    ? post.interview.headingImgSource
                    : "",
                  "interview-type": "interview",
                  "recipe-title": post.recipe ? post.recipe.title : "",
                  "recipe-description": post.recipe
                    ? post.recipe.description
                    : "",
                  "recipe-audio-url": post.recipe ? post.recipe.audioURL : "",
                  "recipe-heading-image": post.recipe
                    ? post.recipe.headingImgSource
                    : "",
                  "recipe-type": "recipe",
                  "movement-title": post.movement ? post.movement.title : "",
                  "movement-description": post.movement
                    ? post.movement.description
                    : "",
                  "movement-audio-url": post.movement
                    ? post.movement.audioURL
                    : "",
                  "movement-heading-image": post.movement
                    ? post.movement.headingImgSource
                    : "",
                  "movement-type": "movement",
                  "sutra-title": post.sutra ? post.sutra.title : "",
                  "sutra-description": post.sutra ? post.sutra.description : "",
                  "sutra-audio-url": post.sutra ? post.sutra.audioURL : "",
                  "sutra-heading-image": post.sutra
                    ? post.sutra.headingImgSource
                    : "",
                  "sutra-type": "sutra",
                }}
                enableReinitialize={true}
                validationSchema={schema}
                onSubmit={async (values) => {}}
              >
                {(props) => (
                  <CreateEditForm
                    props={props}
                    url={"http://dockerpi.asuscomm.com:9090/post/" + postId}
                    method={"POST"}
                  />
                )}
              </Formik>
            ) : (
              <h1 style={{ textAlign: "center", width: "100%" }}>
                This post does not exist!
                <Link
                  to="/admin"
                  style={{ marginLeft: "20px", fontSize: "20pt" }}
                >
                  Go back to home!
                </Link>
              </h1>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditPage;