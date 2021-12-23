import PostProps from "../../models/PostProps";
import PlayButton from "../../components/PlayButton/PlayButton";
import ProfilePicture from "../../public/profilepicture.jpg";
import Posts from "../../components/Posts/Posts";
import { definePostLabel } from "../../components/Post/Post";
import Link from "next/link";

export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `http://dockerpi.asuscomm.com:4040/post/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data.data.post,
    },
  };
}

const Movement = ({ post }: any) => {
  let otherPosts: any = [];

  if (post) {
    otherPosts = [
      {
        interview: post.interview,
        _id: post._id,
      },
      {
        recipe: post.recipe,
        _id: post._id,
      },
      {
        sutra: post.sutra,
        _id: post._id,
      },
    ];
  }

  return (
    <>
      {post.movement ? (
        <>
          <div className="ue-blue-background"></div>
          <div className="ue-main-header">
            <div>
              <div className="ue-main-header__label">
                {definePostLabel(post.movement.type)}
              </div>
              <div className="ue-main-header__person">
                {post.movement.imgSource ? (
                  <div className="ue-main-header__image">
                    <img
                      src={
                        "http://dockerpi.asuscomm.com:9090/images/" +
                        post.movement.imgSource
                      }
                    />
                  </div>
                ) : (
                  <></>
                )}

                <div className="ue-main-header__text">
                  <h1>{post.movement.title}</h1>
                  <p>{post.movement.subtitle}</p>
                  <PlayButton width={40} height={40} />
                </div>
              </div>
              <div className="ue-main-header__description">
                {post.movement.description}
              </div>
            </div>
          </div>
          <div className="ue-main-cards">
            <Posts posts={otherPosts} />
          </div>
        </>
      ) : (
        <div className="ue-main-cards">
          <h1 style={{ width: "100%", textAlign: "center" }}>
            This post does not exist!{" "}
            <Link href="/">
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Please go back to the home page!
              </span>
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Movement;
