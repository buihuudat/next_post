"use client";
import Form from "@components/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdatePrompt = ({ params }) => {
  const id = params.id;
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      await axios
        .get(`/api/prompt/${id}/prompt`)
        .then((res) => setPost(res.data))
        .catch((err) => console.log(err));
    };
    getPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await axios
      .put(`/api/prompt/${id}/prompt`, post)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err))
      .finally(setSubmitting(false));

    router.push("/profile");
  };

  return (
    <Form
      type={"Update"}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
    />
  );
};

export default UpdatePrompt;
