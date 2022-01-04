import { chunkify } from "../../pages";
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
            {post.interview != null ? (
              <Post
                title={post.interview.title}
                audioURL={post.interview.audioURL}
                imgSource={post.interview.imgSource}
                subtitle={post.interview.subtitle}
                description={post.interview.description}
                headingImgSource={post.interview.headingImgSource}
                type={post.interview.type}
                _id={post._id}
                key={Math.random() * 100}
              />
            ) : (
              <div key={Math.random() * 100} style={{ display: "none" }}></div>
            )}

            {post.recipe != null ? (
              <Post
                title={post.recipe.title}
                audioURL={post.recipe.audioURL}
                imgSource={post.recipe.imgSource}
                subtitle={post.recipe.subtitle}
                description={post.recipe.description}
                headingImgSource={post.recipe.headingImgSource}
                type={post.recipe.type}
                _id={post._id}
                key={Math.random() * 100}
              />
            ) : (
              <div key={Math.random() * 100} style={{ display: "none" }}></div>
            )}

            {post.movement != null ? (
              <Post
                title={post.movement.title}
                audioURL={post.movement.audioURL}
                imgSource={post.movement.imgSource}
                subtitle={post.movement.subtitle}
                description={post.movement.description}
                headingImgSource={post.movement.headingImgSource}
                type={post.movement.type}
                _id={post._id}
                key={Math.random() * 100}
              />
            ) : (
              <div key={Math.random() * 100} style={{ display: "none" }}></div>
            )}

            {post.sutra != null ? (
              <Post
                title={post.sutra.title}
                audioURL={post.sutra.audioURL}
                imgSource={post.sutra.imgSource}
                subtitle={post.sutra.subtitle}
                description={post.sutra.description}
                headingImgSource={post.sutra.headingImgSource}
                type={post.sutra.type}
                _id={post._id}
                key={Math.random() * 100}
              />
            ) : (
              <div key={Math.random() * 100} style={{ display: "none" }}></div>
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
