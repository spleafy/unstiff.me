import PostProps from "../../models/PostProps";
import PlayButton from "../PlayButton/PlayButton";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Link from "next/link";
import { useState } from "react";

export const definePostLabel = (type: any) => {
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

const Post = (props: PostProps) => {
  const [playing, setPlaying] = useState(false);

  const imagePrefix = "http://dockerpi.asuscomm.com:9090/images/";

  const definePostColor = (type: any) => {
    switch (type) {
      case "interview":
        return "#fff";
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

  const definePostBorder = (type: any) => {
    if (type != "interview") {
      return "none";
    } else {
      return "";
    }
  };

  const playAudio = (e: any) => {
    document.querySelectorAll(".ue-person-post").forEach((el) => {
      const currentAudio = el.querySelector("audio");
      currentAudio?.pause();
      el.classList.remove("ue-playing");
    });

    let audioEl = e.target;
    let audio;

    if (!playing) {
      if (audioEl.classList.contains("ue-person-post")) {
        audioEl.classList.add("ue-playing");
        audio = audioEl.querySelector("audio");
        if (audio && audio.error == null) {
          audio.play();
          setPlaying(true);
        }
      } else {
        while (!audioEl.classList.contains("ue-person-post")) {
          audioEl = audioEl.parentNode;
        }
        audioEl.classList.add("ue-playing");
        audio = audioEl.querySelector("audio");
        if (audio && audio.error == null) {
          audio.play();
          setPlaying(true);
        }
      }
    } else {
      if (audioEl.classList.contains("ue-person-post")) {
        audioEl.classList.remove("ue-playing");
        audio = audioEl.querySelector("audio");
        if (audio && audio.error == null) {
          audio.pause();
          setPlaying(false);
        }
      } else {
        while (!audioEl.classList.contains("ue-person-post")) {
          audioEl = audioEl.parentNode;
        }
        audioEl.classList.remove("ue-playing");
        audio = audioEl.querySelector("audio");
        if (audio && audio.error == null) {
          audio.pause();
          setPlaying(false);
        }
      }
    }
  };

  return (
    <div
      className="ue-person-post"
      style={{
        backgroundColor: definePostColor(props.type),
        border: definePostBorder(props.type),
      }}
      onClick={(e) => {
        playAudio(e);
      }}
      onBlur={() => {
        setPlaying(false);
      }}
    >
      <audio src={props.audioURL}></audio>
      {props.headingImgSource ? (
        <div
          className="ue-person-post__heading-image"
          style={{
            backgroundImage: `url(${encodeURI(
              imagePrefix + props.headingImgSource
            )})`,
          }}
        ></div>
      ) : (
        <></>
      )}

      <div className="ue-person-post__label">{definePostLabel(props.type)}</div>
      <div className="ue-person-post__profile">
        {props.imgSource ? (
          <div className="ue-person-post__profile-image">
            <img src={imagePrefix + props.imgSource} />
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
        <div className="ue-person-post__description">
          {props.type == "interview" ? props.description : ""}
        </div>
      ) : (
        <></>
      )}

      <div className="ue-person-post__actions">
        <Link href={"/" + props.type + "s/" + props._id}>
          <div>
            <ReadMoreButton />
          </div>
        </Link>
        <PlayButton playing={playing} />
      </div>
    </div>
  );
};

export default Post;
