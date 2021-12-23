import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminPage.scss";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = "Bearer " + localStorage.getItem("token");

      const response = await fetch("http://dockerpi.asuscomm.com:9090/posts", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data: any = await response.json();

      setPosts(data.data.posts);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUserState = async () => {
      const token = "Bearer " + localStorage.getItem("token");

      const response = await fetch("http://dockerpi.asuscomm.com:9090/user", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });

      const data = await response.json();

      if (data.data.id.length > 0 && data.status == 200) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        navigate("/");
      }
    };

    checkUserState();
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
      {loggedIn ? (
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
                    <span style={{ fontWeight: 600 }}>{post.name}</span>
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
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminPage;
