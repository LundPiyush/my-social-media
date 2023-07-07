import React from "react";

const Comment = ({ commentData, userComment }) => {
  const { _id, text } = commentData;
  const { avatarUrl, firstName, lastName } = userComment;
  return (
    <>
      <div className="flex flex-col w-[60%] mt-6 xl:w-[70%] lg:w-[90%] lg:mx-7">
        <div className="flex gap-1 justify-start">
          <img src={avatarUrl} className="h-8" alt={_id} />
          <p className="font-bold">{firstName + " " + lastName}</p>
        </div>
        <p className="text-left m-2">{text}</p>
      </div>
      <hr />
    </>
  );
};

export default Comment;
