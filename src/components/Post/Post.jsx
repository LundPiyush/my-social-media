import React from "react";
import verifiedicon from "../../assets/verifiedicon.png";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { usePosts } from "../../context/posts-context";
import { useAuth } from "../../context/auth-context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { purple } from "@mui/material/colors";
import { useBookmark } from "../../context/bookmark-context";

const Post = (props) => {
  const {
    _id,
    content,
    likes,
    username,
    createdAt,
    updatedAt,
    mediaUrl,
    userUrl,
  } = props;
  const { likePost, disLikePost } = usePosts();
  const { authState } = useAuth();
  const { addToBookmark, postAlreadyInBookmarks, removeFromBookMark } =
    useBookmark();

  const likeByUser = () =>
    props?.likes?.likedBy.filter(
      (currentUser) => currentUser?._id === authState?.user?._id
    ).length !== 0;

  const likeClickHandler = () => {
    if (likeByUser()) {
      disLikePost(_id);
    } else {
      likePost(_id);
    }
  };
  const bookmarkClickHandler = (id) => {
    if (postAlreadyInBookmarks(id)) {
      removeFromBookMark(_id);
    } else addToBookmark(_id);
  };

  return (
    <div className="flex flex-col border-2 p-4 w-[60%] mx-auto xl:w-[70%] lg:w-[90%] lg:mx-7">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-4">
          <img
            alt={username}
            src={userUrl}
            width={50}
            height={10}
            className="rounded-full"
          />
          <Link to={`/profile/${username}`}>
            <div className="flex flex-col items-start">
              <div className="flex">
                <p className="capitalize text-xl mr-1 hover:underline">
                  {username}
                </p>
                <img
                  alt="verified_icon"
                  src={verifiedicon}
                  className="h-[28px] w-[22px] object-contain"
                />
              </div>
              <p>@{username}</p>
            </div>
          </Link>
        </div>

        <p className="self-start justify-center pt-2 text-md md:self-center lg:text-sm md:text-md xs:hidden">
          {`${new Date(createdAt)
            .toDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .slice(4)}`}
        </p>
      </div>
      <div className="flex flex-col my-2">
        <Link to={`/post/${_id}`}>
          <p className="text-left ml-2 my-4">{content}</p>
          <img
            src={mediaUrl}
            alt={username}
            className="max-h-96 mx-auto rounded-lg"
          />
        </Link>
      </div>
      <hr />
      <div className="flex gap-10 my-2 ml-4 md:gap-0 md:justify-around">
        <div className="flex items-center gap-1">
          <button onClick={(e) => likeClickHandler()}>
            {likeByUser() ? (
              <FavoriteIcon style={{ color: "red", fontSize: "22px" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "gray", fontSize: "22px" }} />
            )}
          </button>
          <span>{likes?.likeCount}</span>
        </div>
        <button onClick={() => bookmarkClickHandler(_id)}>
          {postAlreadyInBookmarks(_id) ? (
            <BookmarkIcon sx={{ color: purple[500] }} />
          ) : (
            <BookmarkBorderIcon style={{ color: "gray" }} />
          )}
        </button>
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <ChatBubbleOutlineIcon
            style={{ color: "gray", fontSize: "24px", paddingTop: "4px" }}
          />
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
