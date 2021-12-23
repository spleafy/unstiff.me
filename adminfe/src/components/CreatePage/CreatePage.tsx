import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../Post/Post";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

const CreatePage = () => {
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

  return (
    <>
      {loggedIn ? (
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
                  url={"http://dockerpi.asuscomm.com:9090/post"}
                  method={"POST"}
                />
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

export default CreatePage;
