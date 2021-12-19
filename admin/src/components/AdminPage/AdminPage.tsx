import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.scss";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9090/posts", {
        method: "GET",
      });
      const data: any = await response.json();

      setPosts(data.data.posts);
    };

    fetchData();
  }, []);

  const handleDeleteClick: any = (id: string) => {
    if (deleteRender == true) return;
    setdeleteRender(true);
    setpostId(id);
  };

  const [deleteRender, setdeleteRender] = useState(false);

  const [postId, setpostId] = useState("");

  return (
    <>
      <Navbar />
      <div className="ue-admin-page">
        <DeletePopUp
          render={deleteRender}
          postId={postId}
          setRender={setdeleteRender}
          setPosts={setPosts}
        />
        {posts.length > 0 ? (
          posts.map((post: any, index: number) => (
            <div className="ue-post-wrapper" key={index}>
              <div className="ue-admin-post">
                {post.name}
                <div className="ue-admin-post-actions">
                  <Link to={"/admin/edit/" + post._id}>
                    <button>
                      <FiEdit2 />
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDeleteClick(post._id);
                    }}
                  >
                    <FiTrash2 color="#fff" />
                  </button>
                </div>
              </div>
            </div>
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
