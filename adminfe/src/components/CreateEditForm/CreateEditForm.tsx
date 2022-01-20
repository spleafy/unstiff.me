import React from "react";
import { Field, ErrorMessage } from "formik";
import Post from "../Post/Post";
import "./CreateEditForm.scss";
import { useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

interface CreateEditProps {
  props: any;
  method: string;
  url: string;
}

const CreateEditForm = ({ props, method, url }: CreateEditProps) => {
  const router = useLocation();

  const fileURL: any = (input: any) => {
    const file = input.files[0];
    return URL.createObjectURL(file);
  };

  return (
    <form action={url} method={method} encType="multipart/form-data">
      <div>
        <div>
          <h1>Post</h1>
          <label htmlFor="post-name">
            Name<span>*</span>:
          </label>
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
          <label htmlFor="interview-title-bg">
            Bulgarian Title<span>*</span>:
          </label>
          <Field
            name="interview-title-bg"
            type="text"
            placeholder="Enter title:"
            className="interview-required-field"
          />
          <label htmlFor="interview-title-en">English Title:</label>
          <Field
            name="interview-title-en"
            type="text"
            placeholder="Enter title:"
            className="interview-required-field"
          />
          <label htmlFor="interview-subtitle-bg">
            Bulgarian Subtitle<span>*</span>:
          </label>
          <Field
            name="interview-subtitle-bg"
            type="text"
            placeholder="Enter subtitle:"
            className="interview-required-field"
          />

          <label htmlFor="interview-subtitle-en">English Subtitle:</label>
          <Field
            name="interview-subtitle-en"
            type="text"
            placeholder="Enter subtitle:"
            className="interview-required-field"
          />

          <label htmlFor="interview-description-bg">
            Bulgarian Description<span>*</span>:
          </label>

          <ReactQuill
            value={props.values["interview-description-bg"] || ""}
            className="interview-required-field"
            onChange={(e) => {
              props.handleChange({
                target: { name: "interview-description-bg", value: e },
              });
            }}
          />

          <label htmlFor="interview-description-en">English Description:</label>

          <ReactQuill
            value={props.values["interview-description-en"] || ""}
            className="interview-required-field"
            onChange={(e) => {
              props.handleChange({
                target: { name: "interview-description-en", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["interview-description-bg"]}
            name="interview-description-bg"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <input
            type="text"
            value={props.values["interview-description-en"]}
            name="interview-description-en"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          {/* <Field
              name="interview-description"
              id="interview-description"
              type="text"
              placeholder="Enter description:"
              as="textarea"
              spellCheck="false"
              className="interview-required-field"
            /> */}

          <label htmlFor="interview-audio-url">
            Audio URL<span>*</span>:
          </label>
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
                  props.handleChange({
                    target: { name: "interview-person-image", value: url },
                  });
                }}
              />
            </label>

            <label htmlFor="interview-remove-person-image">
              Remove Person Image
              <input
                type="checkbox"
                name="interview-remove-person-image"
                id="interview-remove-person-image"
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
                  props.handleChange({
                    target: { name: "interview-heading-image", value: url },
                  });
                }}
              />
            </label>

            <label htmlFor="interview-remove-header-image">
              Remove Header Image
              <input
                type="checkbox"
                name="interview-remove-header-image"
                id="interview-remove-header-image"
              />
            </label>
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["interview-title-bg"]}
            subtitle={props.values["interview-subtitle-bg"]}
            description={props.values["interview-description-bg"]}
            type={props.values["interview-type"]}
            audioURL={props.values["interview-audio-url"]}
            imgSource={props.values["interview-person-image"]}
            headingImgSource={props.values["interview-heading-image"]}
          />
        </div>
      </div>
      <div>
        <div>
          <h1>Recipe</h1>
          <label htmlFor="recipe-title">
            Bulgarian Title<span>*</span>:
          </label>
          <Field
            name="recipe-title-bg"
            type="text"
            placeholder="Enter title:"
            className="recipe-required-field"
          />

          <label htmlFor="recipe-title-en">English Title:</label>
          <Field
            name="recipe-title-en"
            type="text"
            placeholder="Enter title:"
            className="recipe-required-field"
          />

          <label htmlFor="recipe-description-bg">
            Bulgarian Description<span>*</span>:
          </label>

          <ReactQuill
            className="recipe-required-field"
            value={props.values["recipe-description-bg"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "recipe-description-bg", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["recipe-description-bg"]}
            name="recipe-description-bg"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <label htmlFor="recipe-description-en">English Description:</label>

          <ReactQuill
            className="recipe-required-field"
            value={props.values["recipe-description-en"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "recipe-description-en", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["recipe-description-en"]}
            name="recipe-description-en"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          {/* <Field
              name="recipe-description"
              type="text"
              placeholder="Enter description:"
              as="textarea"
              spellCheck="false"
              className="recipe-required-field"
              style={{ display: "none" }}
              value={editorRef.current.getContent()}
            /> */}

          <label htmlFor="recipe-audio-url">
            Audio URL<span>*</span>:
          </label>
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
                props.handleChange({
                  target: { name: "recipe-heading-image", value: url },
                });
              }}
            />
            <label htmlFor="recipe-remove-header-image">
              Remove Header Image
              <input
                type="checkbox"
                name="recipe-remove-header-image"
                id="recipe-remove-header-image"
              />
            </label>

            <div />
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["recipe-title-bg"]}
            description={""}
            type={props.values["recipe-type"]}
            audioURL={props.values["recipe-audio-url"]}
            headingImgSource={props.values["recipe-heading-image"]}
          />
        </div>
      </div>
      <div>
        <div>
          <h1>Movement</h1>
          <label htmlFor="movement-title-bg">
            Bulgarian Title<span>*</span>:
          </label>
          <Field
            name="movement-title-bg"
            type="text"
            placeholder="Enter title:"
            className="movement-required-field"
          />

          <label htmlFor="movement-title-en">English Title:</label>
          <Field
            name="movement-title-en"
            type="text"
            placeholder="Enter title:"
            className="movement-required-field"
          />

          <label htmlFor="movement-description-bg">
            Bulgarian Description<span>*</span>:
          </label>

          <ReactQuill
            className="movement-required-field"
            value={props.values["movement-description-bg"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "movement-description-bg", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["movement-description-bg"]}
            name="movement-description-bg"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <label htmlFor="movement-description-en">English Description:</label>

          <ReactQuill
            className="movement-required-field"
            value={props.values["movement-description-en"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "movement-description-en", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["movement-description-en"]}
            name="movement-description-en"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <label htmlFor="movement-audio-url">
            Audio URL<span>*</span>:
          </label>
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
                props.handleChange({
                  target: { name: "movement-heading-image", value: url },
                });
              }}
            />
            <label htmlFor="movement-remove-header-image">
              Remove Header Image
              <input
                type="checkbox"
                name="movement-remove-header-image"
                id="movement-remove-header-image"
              />
            </label>
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["movement-title-bg"]}
            description={""}
            type={props.values["movement-type"]}
            audioURL={props.values["movement-audio-url"]}
            headingImgSource={props.values["movement-heading-image"]}
          />
        </div>
      </div>
      <div>
        <div>
          <h1>Sutra</h1>
          <label htmlFor="sutra-title-bg">
            Bulgarian Title<span>*</span>:
          </label>
          <Field
            name="sutra-title-bg"
            type="text"
            placeholder="Enter title:"
            className="sutra-required-field"
          />

          <label htmlFor="sutra-title-en">English Title:</label>
          <Field
            name="sutra-title-en"
            type="text"
            placeholder="Enter title:"
            className="sutra-required-field"
          />

          <label htmlFor="sutra-description-bg">
            Bulgarian Description<span>*</span>:
          </label>

          <ReactQuill
            className="sutra-required-field"
            value={props.values["sutra-description-bg"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "sutra-description-bg", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["sutra-description-bg"]}
            name="sutra-description-bg"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <label htmlFor="sutra-description-en">English Description:</label>

          <ReactQuill
            className="sutra-required-field"
            value={props.values["sutra-description-en"] || ""}
            onChange={(e) => {
              props.handleChange({
                target: { name: "sutra-description-en", value: e },
              });
            }}
          />

          <input
            type="text"
            value={props.values["sutra-description-en"]}
            name="sutra-description-en"
            onChange={() => {}}
            style={{ display: "none" }}
          />

          <label htmlFor="sutra-audio-url">
            Audio URL<span>*</span>:
          </label>
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
                props.handleChange({
                  target: { name: "sutra-heading-image", value: url },
                });
              }}
            />
            <label htmlFor="sutra-remove-header-image">
              Remove Header Image
              <input
                type="checkbox"
                name="sutra-remove-header-image"
                id="sutra-remove-header-image"
              />
            </label>
          </div>
        </div>
        <div className="ue-post-box">
          <Post
            title={props.values["sutra-title-bg"]}
            description={""}
            type={props.values["sutra-type"]}
            audioURL={props.values["sutra-audio-url"]}
            headingImgSource={props.values["sutra-heading-image"]}
          />
        </div>
      </div>
      <button type="submit">
        {router.pathname === "/admin/create" ? "Create Post" : "Save Edit"}
      </button>
    </form>
  );
};

export default CreateEditForm;
