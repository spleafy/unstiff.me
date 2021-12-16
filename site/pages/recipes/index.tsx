import React from "react";
import Posts from "../../components/Posts/Posts";

const Recipes = ({ posts }: any) => {
  return (
    <div className="ue-main-cards">
      {posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <h1>Unfortunately, there are no posts regarding this subject!</h1>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/recipes`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Recipes;
