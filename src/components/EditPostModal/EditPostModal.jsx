import React, { useState } from "react";
import { usePosts } from "../../context/posts-context";

const EditPostModal = ({ post, setEditPostModal }) => {
  const [editPostData, setEditPostData] = useState({
    _id: post?._id,
    content: post?.content,
  });
  const { editPost } = usePosts();
  const updateHandler = () => {
    editPost(editPostData?._id, editPostData);
    setEditPostModal((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center  bg-modal-background fixed inset-0 z-10">
      <div className="flex flex-col bg-white px-2 py-4 overflow-y-scroll max-h-[38rem]">
        <div className="mb-2">
          <p className="text-2xl">Edit Post</p>
        </div>
        <hr />
        <div className="flex justify-start items-start mt-2 p-4">
          <img
            src={post?.mediaUrl}
            alt={post?.username}
            className="w-[20rem] object-contain"
          />
        </div>
        <div className="flex">
          <textarea
            type="text"
            className="w-full h-[10rem]
            px-4 border-2 m-6"
            value={editPostData?.content}
            onChange={(e) =>
              setEditPostData({ ...editPostData, content: e.target.value })
            }
          />
        </div>
        <div className="flex justify-around items-center mt-6 mb-2">
          <button
            onClick={updateHandler}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Update
          </button>
          <button
            onClick={() => setEditPostModal(false)}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
