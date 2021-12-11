import React from "react";
import Image from "next/image";
import PostProps from "../../models/PostProps";
import { FiPlay } from "react-icons/fi";

const Post = (props: PostProps) => {
  return (
    <div
      className="ue-person-post"
      style={props.postColor ? { backgroundColor: props.postColor } : {}}
    >
      {props.headingImgSource ? (
        <div
          className="ue-person-post__heading-image"
          style={{ backgroundImage: `url(${props.headingImgSource.src})` }}
        ></div>
      ) : (
        <></>
      )}

      <div className="ue-person-post__label">{props.label}</div>
      <div className="ue-person-post__profile">
        {props.imgSource ? (
          <div
            className="ue-person-post__profile-image"
            style={{ backgroundImage: `url(${props.imgSource.src})` }}
          ></div>
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

      <div className="ue-person-post__actions">
        <button className="read-more-button">Прочети Повече</button>
        <button className="audio-button">
          <FiPlay color="#fff" fill="#fff" width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default Post;
