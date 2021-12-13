import type { NextPage } from "next";
import Post from "../components/Post/Post";
import PostProps from "../models/PostProps";

export async function getServerSideProps(context: any) {
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-video">
        <video src="../public/yoga.mp4" controls></video>
      </div>
      <div className="ue-main-cards">
        {posts.length > 0 ? (
          posts.map((post: PostProps) => (
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
          ))
        ) : (
          <h1>Unfortunately, there are no posts regarding this subject!</h1>
        )}
      </div>
    </>
  );
};

export default Home;
