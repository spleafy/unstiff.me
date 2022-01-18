import PostProps from "../../models/PostProps";
import Post from "../Post/Post";
import { useEffect } from "react";

const Posts = ({ posts }: any) => {
  // const getHeight = (element: any): string => {
  //   if (element) {
  //     return element.style.height;
  //   } else {
  //     return "inherit";
  //   }
  // };

  const types = ["interview", "recipe", "movement", "sutra"];

  return (
    <>
      {posts.map((post: any, index: number) =>
        post.interview != null ||
        post.recipe != null ||
        post.movement != null ||
        post.sutra != null ? (
          <div
            className="ue-post-wrapper"
            key={index}
            // style={{ height: getHeight(this) }}
          >
            {types.map((type) =>
              post[type] != null ? (
                <Post
                  title={post[type].title} //post.interview.title
                  audioURL={post[type].audioURL}
                  imgSource={post[type].imgSource}
                  subtitle={post[type].subtitle}
                  description={post[type].description}
                  headingImgSource={post[type].headingImgSource}
                  type={post[type].type}
                  _id={post._id}
                  key={Math.random() * 100}
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
