import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestions/Suggestion";
import { usePosts } from "../../context/posts-context";
import Comment from "../../components/Comment/Comment";
import { useUsers } from "../../context/user-context";
import { useComment } from "../../context/comment-context";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { postsData } = usePosts();
  const [commentInput, setCommentInput] = useState("");
  const { addComment } = useComment();
  const {
    usersData: { users },
  } = useUsers();

  useEffect(() => {
    setIsLoading(true);
    if (postId && postsData?.posts) {
      setPost(postsData?.posts.filter((post) => post._id === postId)[0]);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsData?.posts]);
  if (isLoading) {
    return <h1>loading......</h1>;
  }
  const addCommentHandler = () => {
    if (commentInput.length > 0) {
      addComment(postId, commentInput);
    } else {
      toast.warning("Empty comments not allowed");
    }
    setCommentInput("");
  };
  return (
    <div>
      <div className="flex gap-2">
        <div className="my-4 mx-auto min-w-[70%] max-w-[100%]">
          <Post {...post} />
          <div className="flex flex-col border-2 p-4 w-[60%] mx-auto xl:w-[70%] lg:w-[90%] lg:mx-7">
            <div className="flex gap-2">
              <input
                placeholder="Add comment"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                className="w-[100%] h-10 border-gray-200 border-2 rounded-md px-4 focus-visible:outline-primary-color"
              />

              <button onClick={() => addCommentHandler()}>
                <SendIcon fontSize="large" />
              </button>
            </div>
            {post?.comments.map((comment) => {
              const userComment = users?.find(
                (user) => user?.username === comment?.username
              );
              return (
                <Comment
                  commentData={comment}
                  userComment={userComment}
                  key={comment?._id}
                />
              );
            })}
          </div>
        </div>
        <div className="min-w-[20rem] p-4 border-2 h-calculate_nav md:hidden">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
