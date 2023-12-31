import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { usePosts } from "../../context/posts-context";
import { useAuth } from "../../context/auth-context";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const CreatePostModal = ({ setModal }) => {
  const [postInput, setPostInput] = useState({
    content: "",
    mediaUrl: "",
  });
  const [postImage, setPostImage] = useState(null);
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const { createPost } = usePosts();
  const {
    authState: { user },
  } = useAuth();

  const uploadMedia = async (media) => {
    const formData = new FormData();

    formData.append("file", media);
    formData.append("upload_preset", "one_football");
    formData.append("cloud_name", "dygxaue5x");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dygxaue5x/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data;
    } catch (e) {
      return console.error(e);
    }
  };
  const addPostClickHandler = async () => {
    setModal(false);
    const { url } = await uploadMedia(postImage);
    createPost({ ...postInput, mediaUrl: url, userUrl: user?.avatarUrl });
  };
  return (
    <div className="flex justify-center items-center bg-modal-background fixed inset-0 z-10">
      <div className="flex flex-col bg-white px-2 py-4 w-1/3 dark:bg-dark-mode">
        <div className="mb-2">
          <p className="text-2xl">New Post</p>
        </div>
        <hr />
        <div className="flex flex-col justify-start items-start m-2 mt-4">
          <textarea
            className="border w-full h-40 p-4 shadow-lg rounded-md outline-none dark:bg-dark-mode"
            placeholder="What's on your mind?"
            value={postInput.content}
            onChange={(e) =>
              setPostInput({ ...postInput, content: e.target.value })
            }></textarea>
          {postImage && (
            <div
              className="flex justify-start items-start
            m-6">
              <img
                className="mt-1"
                src={URL.createObjectURL(postImage)}
                alt="post-pic"
              />
              <button
                onClick={() => {
                  setPostImage(null);
                  setPostInput({ ...postInput, mediaUrl: "" });
                }}>
                ╳
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-around mt-6 ml-6 items-center relative">
          <label>
            <ImageIcon className="hover:cursor-pointer" />
            <input
              type="file"
              className="hidden"
              accept="/image*"
              onChange={(e) => {
                setPostImage(e.target.files[0]);
                setPostInput({
                  ...postInput,
                  mediaUrl: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </label>
          <div className="">
            <InsertEmoticonIcon
              className="hover:cursor-pointer ml-4"
              onClick={() => setShowEmojiModal((prev) => !prev)}
            />
            <div className="z-10 absolute top-[120%] right-[15%]  overflow-y-scroll max-h-64">
              {showEmojiModal && (
                <Picker
                  data={data}
                  maxFrequentRows={4}
                  previewPosition="none"
                  navPosition="none"
                  emojiButtonSize={28}
                  emojiSize={20}
                  onEmojiSelect={(emoji) => {
                    setPostInput({
                      ...postInput,
                      content: postInput?.content + emoji.native,
                    });
                  }}
                />
              )}
            </div>
          </div>
          <button
            onClick={addPostClickHandler}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Add Post
          </button>
          <button
            onClick={() => setModal(false)}
            className="bg-primary-color text-white shadow-md p-2 h-10 rounded-xl focus:cursor-pointer hover:bg-white hover:text-primary-color hover:border-primary-color hover:border">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
