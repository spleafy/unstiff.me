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

  const imagePrefix = `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_ADBE_PORT}/images/`;

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

  return (
    <Link href={"/" + props.type + "s/" + props._id}>
      <div
        className="ue-person-post"
        style={{
          backgroundColor: definePostColor(props.type),
          border: definePostBorder(props.type),
        }}
        onBlur={() => {
          setPlaying(false);
        }}
      >
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

        <div className="ue-person-post__label">
          {definePostLabel(props.type)}
        </div>
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
          <div>
            <ReadMoreButton />
          </div>
          <PlayButton playing={false} />
        </div>
      </div>
    </Link>
  );
};

export default Post;
