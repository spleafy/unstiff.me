import React from "react";
import Posts from "../../components/Posts/Posts";

const Sutras = ({ posts }: any) => {
  const filteredPosts: any = [];
  posts.forEach((post: any) => {
    if (post.sutra != null) {
      filteredPosts.push({ recipe: post.sutra, _id: post._id });
    }
  });

  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        <Posts posts={filteredPosts} />
      ) : (
        <h1>Unfortunately, there are no posts regarding this subject!</h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/posts`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Sutras;
