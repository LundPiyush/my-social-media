import React from "react";

const Comment = ({ commentData }) => {
  const { _id, text, username } = commentData;
  console.log(commentData);
  return (
    <div className="flex flex-col border-2 p-4 w-[60%] mx-auto xl:w-[70%] lg:w-[90%] lg:mx-7">
      {_id}
      {text} {username}
    </div>
  );
};

export default Comment;
