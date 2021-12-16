import React from "react";
import PostProps from "../../types/PostProps";
import "./Post.scss";

const Post = (props: PostProps) => {
  const definePostLabel = (type: any) => {
    switch (type) {
      case "interview":
        return "Интервю";
      case "recipe":
        return "Рецепта";
      case "movement":
        return "Движение";
      case "sutra":
        return "Сутра";
      default:
        return "Error";
    }
  };

  const definePostColor = (type: any) => {
    switch (type) {
      case "interview":
        return "transparent";
      case "recipe":
        return "#A9D5F4";
      case "movement":
        return "#FDB5B5";
      case "sutra":
        return "#FDF1B5";
      default:
        return "Error";
    }
  };

  return (
    <div
      className="ue-person-post"
      style={{ backgroundColor: definePostColor(props.type) }}
    >
      {props.headingImgSource ? (
        <div
          className="ue-person-post__heading-image"
          style={{ backgroundImage: `url(${props.headingImgSource})` }}
        ></div>
      ) : (
        <></>
      )}

      <div className="ue-person-post__label">{definePostLabel(props.type)}</div>
      <div className="ue-person-post__profile">
        {props.imgSource ? (
          <div className="ue-person-post__profile-image">
            <img src={props.imgSource} alt="" />
          </div>
        ) : (
          <></>
        )}

        <div className="ue-person-post__profile-text">
          <h1>{props.title}</h1>
          {props.subtitle ? <p>{props.subtitle}</p> : <></>}
        </div>
      </div>
      {props.description ? (
        <div className="ue-person-post__description">{props.description}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
