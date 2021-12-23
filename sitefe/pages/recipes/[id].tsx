import { useState } from "react";
import PostProps from "../../models/PostProps";
import PlayButton from "../../components/PlayButton/PlayButton";
import ProfilePicture from "../../public/profilepicture.jpg";
import Posts from "../../components/Posts/Posts";
import { idPush } from "..";
import { definePostLabel } from "../../components/Post/Post";
import Link from "next/link";

export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_SIBE_PORT}/post/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      post: data.data.post,
    },
  };
}

const Recipe = ({ post }: any) => {
  let otherPosts: any = [];

  if (post) {
    otherPosts = [
      {
        interview: post.interview,
        _id: post._id,
      },
      {
        movement: post.movement,
        _id: post._id,
      },
      {
        sutra: post.sutra,
        _id: post._id,
      },
    ];
  }

  const [playing, setPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = document.querySelector("audio");
    if (audio && audio.error == null && !playing) {
      await audio.play();
      setPlaying(true);
    } else if (audio && audio.error == null && playing) {
      await audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {post.recipe ? (
        <>
          <div className="ue-blue-background"></div>
          <div className="ue-main-header">
            <audio src={post.recipe.audioURL}></audio>
            <div>
              <div className="ue-main-header__label">
                {definePostLabel(post.recipe.type)}
              </div>
              <div className="ue-main-header__person">
                {post.recipe.imgSource ? (
                  <div className="ue-main-header__image">
                    <img
                      src={
                        `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_ADBE_PORT}/images/` +
                        post.recipe.imgSource
                      }
                    />
                  </div>
                ) : (
                  <></>
                )}

                <div className="ue-main-header__text">
                  <h1>{post.recipe.title}</h1>
                  <p>{post.recipe.subtitle}</p>
                  <div
                    onClick={() => {
                      toggleAudio();
                    }}
                  >
                    <PlayButton width={40} height={40} playing={false} />
                  </div>
                </div>
              </div>
              <div className="ue-main-header__description">
                {post.recipe.description}
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

export default Recipe;
