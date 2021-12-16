import React from "react";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import PostProps from "../../types/PostProps";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9090/posts", {
        method: "GET",
      });
      const data: any = response.json();
      setPosts(data);
    };

    fetchData();
  });

  return (
    <>
      <Navbar />
      <div className="ue-admin-page">
        {posts.length > 0 ? (
          posts.map((post: PostProps) => (
            <Post
              title={post.title}
              audioURL={post.audioURL}
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
          <>
            <h1>There are no posts!</h1>
            <h2>
              Try <Link to="/admin/create">creating one.</Link>
            </h2>
          </>
        )}
      </div>
    </>
  );
};

export default AdminPage;
