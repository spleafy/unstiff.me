import React from "react";
import "./DeletePopUp.scss";

interface DeleteProps {
  render: boolean;
  postId: string;
  setRender: any;
  setPosts: any;
}

const DeletePopUp = (props: DeleteProps) => {
  const deletePost = async () => {
    const token = "Bearer " + localStorage.getItem("token");

    const response = await fetch(
      `http://dockerpi.asuscomm.com:9090/post/${props.postId}`,
      {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }
    );
    const data = await response.json();
    props.setPosts(data.data.posts);
    props.setRender(false);
  };

  return (
    <>
      {props.render ? (
        <div className="ue-delete-pop-up">
          <h1>Are you sure you want to delete this post?</h1>
          <div className="ue-delete-pop-up__buttons">
            <button
              onClick={() => {
                deletePost();
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                props.setRender(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeletePopUp;
