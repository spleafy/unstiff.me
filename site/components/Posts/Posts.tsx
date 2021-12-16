import { chunkify } from "../../pages";
import PostProps from "../../models/PostProps";
import Post from "../Post/Post";

interface PostsProps {
  posts: [PostProps];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      {chunkify(posts, 4, true).map((posts: any) => (
        <>
          <div className="ue-post-wrapper">
            {posts.map((post: PostProps) => (
              <Post
                title={post.title}
                label={post.label}
                redirectURL={post.redirectURL}
                audioURL={post.audioURL}
                postColor={post.postColor}
                imgSource={post.imgSource}
                subtitle={post.subtitle}
                description={post.description}
                headingImgSource={post.headingImgSource}
                type={post.type}
                _id={post._id}
                key={post._id}
              />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Posts;
