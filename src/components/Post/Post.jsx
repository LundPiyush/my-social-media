import React from "react";
import userimage from "../../assets/userimage.png";

const Post = (props) => {
  const { content, likes, username, createdAt, updatedAt } = props;
  return (
    <div className="flex flex-col border-2 m-6 p-2 w-[85%]">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-4">
          <img alt="" src={userimage} width={50} height={10} />
          <div className="flex flex-col items-start">
            <div className="flex">
              <p className="capitalize text-xl mr-4">{username}</p>
              <span>{createdAt.slice(0, 10)}</span>
            </div>
            <p>@{username}</p>
          </div>
        </div>
        <p className="self-start text-xl">hello</p>
      </div>
      <div>div 2 -{content.slice(0, 10)}</div>
      <div>div 3- {likes?.likeCount}</div>
      <div>div 4 -like , comment , bookmarks</div>
    </div>
  );
};

export default Post;
