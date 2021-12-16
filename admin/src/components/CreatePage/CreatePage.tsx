import React from "react";
import Navbar from "../Navbar/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Post from "../Post/Post";
import "./CreatePage.scss";

const CreatePage = () => {
  // const schema = yup.object().shape({
  //   username: yup
  //     .string()
  //     .required("This field is required!")
  //     .min(4, "Username should be at least 4 characters"),
  //   password: yup.string().required("This field is required!"),
  //   // .min(8, "Password must be at least 8 characters!"),
  // });

  const createFormData = (obj: any) => {
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
      for (let value in obj[key]) {
        console.log(value);
      }
    });
    return formData;
  };

  const [errors, setErrors] = useState([""]);

  return (
    <>
      <Navbar />
      <div className="ue-admin-page">
        <Formik
          initialValues={{
            interview: {
              title: "",
              subtitle: "",
              description: "",
              audioURL: "",
              type: "interview",
            },
            recipe: {
              title: "",
              description: "",
              audioURL: "",
              type: "recipe",
            },
            movement: {
              title: "",
              description: "",
              audioURL: "",
              type: "movement",
            },
            sutra: {
              title: "",
              description: "",
              audioURL: "",
              type: "sutra",
            },
          }}
          onSubmit={async (values) => {
            console.log(createFormData(values));

            const response = await fetch("http://localhost:9090/post", {
              method: "POST",
              headers: { enctype: "multipart/form-data" },
              body: createFormData(values),
            }).then((response) => response.json());
            if (response.data.created === false) {
              setErrors([...errors, "Unsuccessful creation of post!"]);
            } else {
              console.log("successfull", response);
            }
          }}
        >
          {(props) => (
            <Form>
              <div>
                <div>
                  <h1>Interview</h1>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="interview.title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="subtitle">Subtitle:</label>
                  <Field
                    name="interview.subtitle"
                    type="text"
                    placeholder="Enter subtitle:"
                  />
                  <label htmlFor="description">Description:</label>
                  <Field
                    name="interview.description"
                    type="text"
                    placeholder="Enter description:"
                  />
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values.interview.title}
                    subtitle={props.values.interview.subtitle}
                    description={props.values.interview.description}
                    type={props.values.interview.type}
                    audioURL={props.values.interview.audioURL}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Recipe</h1>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="recipe.title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="description">Description:</label>
                  <Field
                    name="recipe.description"
                    type="text"
                    placeholder="Enter description:"
                  />
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values.recipe.title}
                    description={props.values.recipe.description}
                    type={props.values.recipe.type}
                    audioURL={props.values.recipe.audioURL}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Movement</h1>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="movement.title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="description">Description:</label>
                  <Field
                    name="movement.description"
                    type="text"
                    placeholder="Enter description:"
                  />
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values.movement.title}
                    description={props.values.movement.description}
                    type={props.values.movement.type}
                    audioURL={props.values.movement.audioURL}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1>Sutra</h1>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="sutra.title"
                    type="text"
                    placeholder="Enter title:"
                  />
                  <label htmlFor="description">Description:</label>
                  <Field
                    name="sutra.description"
                    type="text"
                    placeholder="Enter description:"
                  />
                  <button type="submit">Submit</button>
                </div>
                <div className="ue-post-box">
                  <Post
                    title={props.values.sutra.title}
                    description={props.values.sutra.description}
                    type={props.values.sutra.type}
                    audioURL={props.values.sutra.audioURL}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreatePage;
