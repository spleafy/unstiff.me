import type { NextPage } from "next";
import Posts from "../components/Posts/Posts";
import PostProps from "../models/PostProps";

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_SIBE_PORT}/posts`
  );

  const data = await response.json();

  return {
    props: {
      posts: data.data.posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className="ue-blue-background"></div>
      <div className="ue-main-video">
        <video src="yoga.mp4" controls></video>
      </div>
      <div className="ue-main-cards">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Unfortunately, there are no posts regarding this subject!
          </h1>
        )}
      </div>
    </>
  );
};

export default Home;
