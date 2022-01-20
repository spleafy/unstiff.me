import React from "react";
import Posts from "../../components/Posts/Posts";

const Sutras = ({ posts }: any) => {
  const filteredPosts: any = [];
  posts.forEach((post: any) => {
    if (post.sutra != null) {
      filteredPosts.push({ sutra: post.sutra, _id: post._id });
    }
  });

  return (
    <div className="ue-main-cards">
      {posts.length > 0 &&
      filteredPosts[0] != undefined &&
      filteredPosts[0].sutra ? (
        <Posts posts={filteredPosts} />
      ) : (
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Unfortunately, there are no posts regarding this subject!
        </h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_SIBE_PORT}/posts`
  );
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Sutras;
