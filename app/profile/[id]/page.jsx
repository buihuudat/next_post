"use client";

import Profile from "@components/Profile";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`/api/user/${params.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    };

    getUser();
  }, [params?.id]);

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get(`/api/prompt/${user._id}`)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
    };
    getPosts();
  }, [user?._id]);
  return <Profile name={user.username} desc={"Hi there!!!"} data={posts} />;
};

export default UserProfile;
