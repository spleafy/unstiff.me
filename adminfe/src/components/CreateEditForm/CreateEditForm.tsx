import React, { useState, useMemo } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Post from "../Post/Post";
import "./CreateEditForm.scss";
import { useLocation } from "react-router-dom";

interface CreateEditProps {
  props: any;
  method: string;
  url: string;
}

const CreateEditForm = ({ props, method, url }: any) => {
  const router = useLocation();

  const fileURL: any = (input: any) => {
    const file = input.files[0];
    return URL.createObjectURL(file);
  };

  console.log(props.values);

  const [interviewPersonImage, setInterviewPersonImage] = useState(
    props.values["interview-person-image"]
      ? "http://dockerpi.asuscomm.com:9090/images/" +
          props.values["interview-person-image"]
      : ""
  );

  const [interviewHeadingImage, setInterviewHeadingImage] = useState(
    props.values["interview-heading-image"]
      ? "http://dockerpi.asuscomm.com:9090/images/" +
          props.values["interview-heading-image"]
      : ""
  );

  const [recipeHeadingImage, setRecipeHeadingImage] = useState(
    props.values["recipe-heading-image"]
      ? "http://dockerpi.asuscomm.com:9090/images/" +
          props.values["recipe-heading-image"]
      : ""
  );

  const [movementHeadingImage, setMovementHeadingImage] = useState(
    props.values["movement-heading-image"]
      ? "http://dockerpi.asuscomm.com:9090/images/" +
          props.values["movement-heading-image"]
      : ""
  );

  const [sutraHeadingImage, setSutraHeadingImage] = useState(
    props.values["sutra-heading-image"]
      ? "http://dockerpi.asuscomm.com:9090/images/" +
          props.values["sutra-heading-image"]
      : ""
  );

  return (
    <form action={url} method={method} encType="multipart/form-data">
      <div>
        <div>
          <h1>Post</h1>
          <label htmlFor="post-name">Name:</label>
          <Field
            name="post-name"
            type="text"
            placeholder="Enter name:"
            required
          />

          <div
            className="post-error"
            style={{ color: "red", marginTop: "10px" }}
          >
            <ErrorMessage name="post-name" />
          </div>
          <h1>Interview</h1>
          <label htmlFor="interview-title">Title:</label>
          <Field
            name="interview-title"
            type="text"
            placeholder="Enter title:"
            className="interview-required-field"
          />
          <label htmlFor="interview-subtitle">Subtitle:</label>
          <Field
            name="interview-subtitle"
            type="text"
            placeholder="Enter subtitle:"
            className="interview-required-field"
          />
          <label htmlFor="interview-description">Description:</label>
          <Field
            name="interview-description"
            id="interview-description"
            type="text"
            placeholder="Enter description:"
            as="textarea"
            spellCheck="false"
            className="interview-required-field"
          />
          <label htmlFor="interview-audio-url">Audio URL:</label>
          <Field
            name="interview-audio-url"
            type="text"
            placeholder="Enter audio URL:"
            className="interview-required-field"
          />

          <div className="select-file-box">
            <label
              htmlFor="interview-person-image"
              className="input-file-label"
            >
              Select Person Image
              <input
                type="file"
                name="interview-person-image"
                id="interview-person-image"
                onChange={(e) => {
                  const url = fileURL(e.target);
                  setInterviewPersonImage(url);
                }}
              />
            </label>

            <label
              htmlFor="interview-header-image"
              className="input-file-label"
            >
              Select Header Image
              <input
                type="file"
                name="interview-header-image"
                id="interview-header-image"
                onChange={(e) => {
                  const url = fileURL(e.target);
                  setInterviewHeadingImage(url);
                }}
              />
            </label>
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["interview-title"]}
            subtitle={props.values["interview-subtitle"]}
            description={props.values["interview-description"]}
            type={props.values["interview-type"]}
            audioURL={props.values["interview-audio-url"]}
            imgSource={interviewPersonImage}
            headingImgSource={interviewHeadingImage}
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
            className="recipe-required-field"
          />
          <label htmlFor="recipe-description">Description:</label>
          <Field
            name="recipe-description"
            type="text"
            placeholder="Enter description:"
            as="textarea"
            spellCheck="false"
            className="recipe-required-field"
          />
          <label htmlFor="recipe-audio-url">Audio URL:</label>
          <Field
            name="recipe-audio-url"
            type="text"
            placeholder="Enter audio URL:"
            className="recipe-required-field"
          />
          <div className="select-file-box">
            <label htmlFor="recipe-header-image" className="input-file-label">
              Select Header Image
            </label>
            <input
              type="file"
              name="recipe-header-image"
              id="recipe-header-image"
              onChange={(e) => {
                const url = fileURL(e.target);
                setRecipeHeadingImage(url);
              }}
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
            headingImgSource={recipeHeadingImage}
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
            className="movement-required-field"
          />
          <label htmlFor="movement-description">Description:</label>
          <Field
            name="movement-description"
            type="text"
            placeholder="Enter description:"
            as="textarea"
            spellCheck="false"
            className="movement-required-field"
          />
          <label htmlFor="movement-audio-url">Audio URL:</label>
          <Field
            name="movement-audio-url"
            type="text"
            placeholder="Enter audio URL:"
            className="movement-required-field"
          />
          <div className="select-file-box">
            <label htmlFor="movement-header-image" className="input-file-label">
              Select Header Image
            </label>
            <input
              type="file"
              name="movement-header-image"
              id="movement-header-image"
              onChange={(e) => {
                const url = fileURL(e.target);
                setMovementHeadingImage(url);
              }}
            />
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["movement-title"]}
            description={""}
            type={props.values["movement-type"]}
            audioURL={props.values["movement-audio-url"]}
            headingImgSource={movementHeadingImage}
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
            className="sutra-required-field"
          />
          <label htmlFor="sutra-description">Description:</label>
          <Field
            name="sutra-description"
            type="text"
            placeholder="Enter description:"
            as="textarea"
            spellCheck="false"
            className="sutra-required-field"
          />
          <label htmlFor="sutra-audio-url">Audio URL:</label>
          <Field
            name="sutra-audio-url"
            type="text"
            placeholder="Enter audio URL:"
            className="sutra-required-field"
          />
          <div className="select-file-box">
            <label htmlFor="sutra-header-image" className="input-file-label">
              Select Header Image
            </label>
            <input
              type="file"
              name="sutra-header-image"
              id="sutra-header-image"
              onChange={(e) => {
                const url = fileURL(e.target);
                setSutraHeadingImage(url);
              }}
            />
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["sutra-title"]}
            description={""}
            type={props.values["sutra-type"]}
            audioURL={props.values["sutra-audio-url"]}
            headingImgSource={sutraHeadingImage}
          />
        </div>
      </div>
      <button type="submit">
        {router.pathname == "/admin/create" ? "Create Post" : "Save Edit"}
      </button>
    </form>
  );
};

export default CreateEditForm;