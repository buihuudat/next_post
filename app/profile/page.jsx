"use client";
import Profile from "@components/Profile";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get(`/api/prompt/${session?.user.id}`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPosts();
  }, [session?.user]);

  return <Profile name={"My"} desc={"Welcome to my prompt"} data={posts} />;
};

export default MyProfile;
