import React from "react";

import Post from "../../components/Post/Post";
import PostProps from "../../models/PostProps";

// const Recipes = ({ posts }: any) => {
const Recipes = () => {
  const posts = [
    {
      _id: "61b6ad018ea7d322aa156f4c",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad1d8ea7d322aa156f51",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad018ea7d322aa156f4c",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad1d8ea7d322aa156f51",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad018ea7d322aa156f4c",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
    {
      _id: "61b6ad1d8ea7d322aa156f51",
      label: "Рецепта",
      title: "Спаначени палачинки с ала бала здравословна гарнитура",
      redirectURL: "da",
      audioURL: "da",
      headingImgSource: "../public",
      postColor: "#A9D5F4",
      type: "recipe",
      author: "Daniela Petrova",
      __v: 0,
    },
  ];

  return (
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
  );
};

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:4000/recipes`);
//   const data = await response.json();

//   return {
//     props: { posts: data.data.posts },
//   };
// }

export default Recipes;
