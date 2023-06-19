import React from "react";
import userimage from "../../assets/userimage.png";
import verifiedicon from "../../assets/verifiedicon.png";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Post = (props) => {
  const { content, likes, username, createdAt, updatedAt, mediaUrl, userUrl } =
    props;
  return (
    <div className="flex flex-col border-2 p-4 w-[50%] mx-auto lg:w-[70%] md:w-[90%] lg:mx-7">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-4">
          <img
            alt={username}
            src={userUrl}
            width={50}
            height={10}
            className="rounded-full"
          />
          <div className="flex flex-col items-start">
            <div className="flex">
              <p className="capitalize text-xl mr-1">{username}</p>
              <img
                alt="verified_icon"
                src={verifiedicon}
                className="h-[28px] w-[22px] object-contain"
              />
            </div>
            <p>@{username}</p>
          </div>
        </div>
        <p className="self-start justify-center pt-2 text-md md:self-center lg:text-sm md:text-md xs:self-end xs:text-xs">
          {createdAt.slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-col my-2">
        <Link to="/login">
          <p className="text-left ml-2 my-4">{content}</p>
          <img
            src={mediaUrl}
            alt="haland"
            className="max-h-96 mx-auto rounded-lg"
          />
        </Link>
      </div>
      <hr />
      <div className="flex gap-6 my-2 ml-4">
        <div className="flex items-center gap-1">
          <button>
            <FavoriteBorderIcon style={{ color: "gray", fontSize: "24px" }} />
          </button>
          <span>{likes.likeCount}</span>
        </div>
        <button>
          <BookmarkBorderIcon style={{ color: "gray" }} />
        </button>
        <div className="flex items-center gap-1">
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
