import PostProps from "../../models/PostProps";
import PlayButton from "../PlayButton/PlayButton";
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../../public/profilepicture.jpg";

const Post = (props: PostProps) => {
  return (
    <Link href={"/" + props.type + "s/" + props._id}>
      <div
        className="ue-person-post"
        style={props.postColor ? { backgroundColor: props.postColor } : {}}
      >
        {props.headingImgSource ? (
          <div
            className="ue-person-post__heading-image"
            style={{ backgroundImage: `url(${ProfilePicture.src})` }}
          ></div>
        ) : (
          <></>
        )}

        <div className="ue-person-post__label">{props.label}</div>
        <div className="ue-person-post__profile">
          {props.imgSource ? (
            <div className="ue-person-post__profile-image">
              <Image
                src={ProfilePicture}
                layout="fixed"
                width={115}
                height={95}
              />
            </div>
          ) : (
            <></>
          )}

          <div className="ue-person-post__profile-text">
            {console.log(props.type)}
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
          <ReadMoreButton />
          <PlayButton />
        </div>
      </div>
    </Link>
  );
};

export default Post;
