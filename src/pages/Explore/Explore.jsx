import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Post from "../../components/Post/Post";
import Suggestion from "../../components/Suggestions/Suggestion";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const LIMIT = 3;
const Explore = () => {
  const [pageNo, setPageNo] = useState(0);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const loader = useRef(null);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNo((prev) => ++prev);
      }
    };
    const observer = new IntersectionObserver(handleObserver);
    if (elementRef) observer.observe(elementRef);

    return () => {
      observer.unobserve(elementRef);
    };
  }, []);

  const getAllPosts = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`/api/posts/${LIMIT}/${pageNo}`);
      setPosts((state) => [...state, ...data?.data?.posts]);
      setPageInfo({ ...data?.data?.info });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (pageInfo?.totalPages >= pageNo || pageInfo === null) {
      getAllPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  return (
    <>
      <div className="h-calculate_nav overflow-hidden">
        <div className="flex justify-between h-calculate_nav">
          <Sidebar />
          <div className="flex flex-col gap-0 overflow-y-scroll">
            {posts?.map((post, index) => {
              return <Post {...post} key={index} />;
            })}
            {loading && (
              <div className="border-8 mx-auto">
                <Oval
                  height={80}
                  width={80}
                  color="#a020f0"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#a020f0"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            )}
            <div ref={loader} />
          </div>
          <div className="min-w-[20rem] p-4 border-2 h-calculate_nav lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
