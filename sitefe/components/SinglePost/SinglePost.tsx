import React, { useState, useEffect } from "react";
import { definePostLabel } from "../../components/Post/Post";
import PlayButton from "../../components/PlayButton/PlayButton";
import Posts from "../../components/Posts/Posts";
import { useRouter } from "next/router";

interface SinglePostProps {
  post: any;
  otherPosts: any;
  type: string;
}

const SinglePost = ({ post, otherPosts, type }: SinglePostProps) => {
  const isValidURL = () => {
    const expression =
      /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    return expression.test(post[type].audioURL);
  };

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

  let language = "";

  const { query } = useRouter();

  if (query.lang == undefined) {
    language = "bg";
  } else if (query.lang == "bg") {
    language = "bg";
  } else {
    language = "en";
  }

  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-header">
        <audio src={post[type].audioURL}></audio>
        <div>
          <div className="ue-main-header__label">
            {definePostLabel(post[type].type, language)}
          </div>
          <div className="ue-main-header__person">
            {post[type].imgSource ? (
              <div className="ue-main-header__image">
                <img
                  src={
                    `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_ADBE_PORT}/images/` +
                    post[type].imgSource
                  }
                />
              </div>
            ) : (
              <></>
            )}

            <div className="ue-main-header__text">
              <h1>{post[type]["title-" + language]}</h1>
              <p>{post[type]["subtitle-" + language]}</p>
              <div
                onClick={() => {
                  toggleAudio();
                }}
              >
                {isValidURL() ? (
                  <PlayButton width={40} height={40} playing={playing} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div
            className="ue-main-header__description"
            dangerouslySetInnerHTML={{
              __html: post[type]["description-" + language],
            }}
          ></div>
        </div>
      </div>
      <div className="ue-main-cards" style={{ justifyContent: "center" }}>
        <Posts posts={otherPosts} />
      </div>
    </>
  );
};

export default SinglePost;
