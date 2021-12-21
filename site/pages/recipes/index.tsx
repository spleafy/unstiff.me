import React from "react";
import Posts from "../../components/Posts/Posts";

const Recipes = ({ posts }: any) => {
  console.log(posts);

  const filteredPosts: any = [];
  posts.forEach((post: any) => {
    if (post.recipe != null) {
      filteredPosts.push({ recipe: post.recipe, _id: post._id });
    }
  });

  console.log(filteredPosts);

  return (
    <div className="ue-main-cards">
      {posts.length > 0 && posts[0].recipe ? (
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
  const response = await fetch(`http://localhost:4000/posts`);
  const data = await response.json();

  return {
    props: { posts: data.data.posts },
  };
}

export default Recipes;
