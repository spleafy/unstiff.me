import PostProps from "../../models/PostProps";
import Post from "../Post/Post";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Posts = ({ posts }: any) => {
  const types = ["interview", "recipe", "movement", "sutra"];

  let language = "";

  const { query } = useRouter();

  if (query.lang == undefined) {
    language = "bg";
  } else if (query.lang == "bg") {
    language = "bg";
  } else {
    language = "en";
  }

  const checkValidity = (x: any) => {
    if (x == null) {
      return false;
    }

    if (x == undefined) {
      return false;
    }

    if (x == "") {
      return false;
    }

    return true;
  };

  return (
    <>
      {posts.map((post: any, index: number) =>
        (post.interview != null &&
          checkValidity(post.interview["title-" + language])) ||
        (post.recipe != null &&
          checkValidity(post.recipe["title-" + language])) ||
        (post.movement != null &&
          checkValidity(post.movement["title-" + language])) ||
        (post.sutra != null &&
          checkValidity(post.sutra["title-" + language])) ? (
          <div className="ue-post-wrapper" key={index}>
            {console.log(language)}
            {types.map((type) =>
              post[type] != null &&
              checkValidity(post[type]["title-" + language]) ? (
                <Post
                  title={post[type]["title-" + language]}
                  audioURL={post[type].audioURL}
                  imgSource={post[type].imgSource}
                  subtitle={post[type]["subtitle-" + language]}
                  description={post[type]["description-" + language]}
                  headingImgSource={post[type].headingImgSource}
                  type={post[type].type}
                  _id={post._id}
                  key={Math.random() * 100}
                  language={language}
                />
              ) : (
                <div
                  key={Math.random() * 100}
                  style={{ display: "none" }}
                ></div>
              )
            )}
          </div>
        ) : (
          <div key={index} style={{ display: "none" }}></div>
        )
      )}
    </>
  );
};

export default Posts;
