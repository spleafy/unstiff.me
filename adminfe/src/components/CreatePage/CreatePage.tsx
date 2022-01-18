import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
import { checkUserState } from "../services/checkUserState";
import Loader from "../Loader/Loader";

const CreatePage = () => {
  const schema = yup.object().shape({
    "post-name": yup.string().required("This field is required!"),
  });

  const [loading, setLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const effect = async () => {
      await checkUserState(navigate, setLoggedIn);
      setLoading(false);
    };

    effect();
  }, [navigate]);

  return (
    <>
      <Loader loading={loading} />
      {loggedIn ? (
        <>
          <Navbar />
          <div className="ue-admin-page">
            <Formik
              initialValues={{
                "post-name": "",
                "interview-title-bg": "",
                "interview-title-en": "",
                "interview-subtitle-bg": "",
                "interview-subtitle-en": "",
                "interview-description-bg": "",
                "interview-description-en": "",
                "interview-audio-url": "",
                "interview-type": "interview",
                "recipe-title-bg": "",
                "recipe-title-en": "",
                "recipe-description-bg": "",
                "recipe-description-en": "",
                "recipe-audio-url": "",
                "recipe-type": "recipe",
                "movement-title-bg": "",
                "movement-title-en": "",
                "movement-description-bg": "",
                "movement-description-en": "",
                "movement-audio-url": "",
                "movement-type": "movement",
                "sutra-title-bg": "",
                "sutra-title-en": "",
                "sutra-description-bg": "",
                "sutra-description-en": "",
                "sutra-audio-url": "",
                "sutra-type": "sutra",
              }}
              validationSchema={schema}
              onSubmit={async (values) => {}}
            >
              {(props) => (
                <CreateEditForm
                  props={props}
                  url={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_ADBE_PORT}/post`}
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
