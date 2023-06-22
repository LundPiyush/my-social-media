import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostService } from "../../services/postServices";
import Post from "../../components/Post/Post";
import Nav from "../../components/Nav/Nav";
import Suggestion from "../../components/Suggestions/Suggestion";
import { usePosts } from "../../context/posts-context";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { postsData } = usePosts();

  // const getPostData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { status, data } = await getPostService(postId);
  //     if (status === 200) {
  //       setPost(data?.post);
  //       setIsLoading(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (postId && postsData?.posts)
      setPost(postsData?.posts.filter((post) => post._id === postId)[0]);
    //getPostData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsData?.posts]);
  if (isLoading) {
    return <h1>loading......</h1>;
  }
  return (
    <div>
      <Nav />
      <div className="flex gap-2">
        <div className="my-4 mx-auto min-w-[70%] max-w-[100%]">
          <Post {...post} />
        </div>
        <div className="min-w-[20rem] p-4 border-2 border-red-100 h-calculate_nav md:hidden">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
