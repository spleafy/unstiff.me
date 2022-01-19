import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
import { checkUserState } from "../services/checkUserState";
import Loader from "../Loader/Loader";

const EditPage = () => {
  const schema = yup.object().shape({
    "post-name": yup.string().required("This field is required!"),
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const effect = async () => {
      await checkUserState(navigate, setLoggedIn);
      setLoading(false);
    };

    effect();
  }, [navigate]);

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const token = "Bearer " + localStorage.getItem("token");

      const post = await fetch(
        `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}/post/${postId}`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );

      const data = await post.json();

      if (data.status === 200) {
        setPost(data.data.post);
      } else {
        navigate("/");
      }
    };

    getPost();
  }, [navigate, postId]);

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
      <Loader loading={loading} />
      {loggedIn ? (
        <>
          <Navbar />
          <div className="ue-admin-page">
            {post ? (
              <Formik
                initialValues={{
                  "post-name": post.name,
                  "interview-title-bg": post.interview
                    ? post.interview["title-bg"]
                    : "",
                  "interview-title-en": post.interview
                    ? post.interview["title-en"]
                    : "",
                  "interview-subtitle-bg": post.interview
                    ? post.interview["subtitle-bg"]
                    : "",
                  "interview-subtitle-en": post.interview
                    ? post.interview["subtitle-en"]
                    : "",
                  "interview-description-bg": post.interview
                    ? post.interview["description-bg"]
                    : "",
                  "interview-description-en": post.interview
                    ? post.interview["description-en"]
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
                  "recipe-title-bg": post.recipe ? post.recipe["title-bg"] : "",
                  "recipe-title-en": post.recipe ? post.recipe["title-en"] : "",
                  "recipe-description-bg": post.recipe
                    ? post.recipe["description-bg"]
                    : "",
                  "recipe-description-en": post.recipe
                    ? post.recipe["description-en"]
                    : "",
                  "recipe-audio-url": post.recipe ? post.recipe.audioURL : "",
                  "recipe-heading-image": post.recipe
                    ? post.recipe.headingImgSource
                    : "",
                  "recipe-type": "recipe",
                  "movement-title-bg": post.movement
                    ? post.movement["title-bg"]
                    : "",
                  "movement-title-en": post.movement
                    ? post.movement["title-en"]
                    : "",
                  "movement-description-bg": post.movement
                    ? post.movement["description-bg"]
                    : "",
                  "movement-description-en": post.movement
                    ? post.movement["description-en"]
                    : "",
                  "movement-audio-url": post.movement
                    ? post.movement.audioURL
                    : "",
                  "movement-heading-image": post.movement
                    ? post.movement.headingImgSource
                    : "",
                  "movement-type": "movement",
                  "sutra-title-bg": post.sutra ? post.sutra["title-bg"] : "",
                  "sutra-title-en": post.sutra ? post.sutra["title-en"] : "",
                  "sutra-description-bg": post.sutra
                    ? post.sutra["description-bg"]
                    : "",
                  "sutra-description-en": post.sutra
                    ? post.sutra["description-en"]
                    : "",
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
                    url={
                      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}/post/` +
                      postId
                    }
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
