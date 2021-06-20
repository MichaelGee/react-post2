import React from "react";
import axios from "axios";
import "../styles/main.css";
// import useFetch from '../hooks/useFetch';
import { useState, useEffect } from "react";
import PostList from "./PostsList";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      setData(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      {/* { isPending && <div className='loading'> Please wait, your page is loading... </div>} */}

      {/* since the value of post is null at the very start, we  add a conditional rendering 
          to state that since userpost is null it wont evaluate the code at && instead it'll stop running
          but if post( what you are mapping) has a value then Card will render.  */}

      {data && <PostList data={data} />}
    </div>
  );
};

export default Home;
