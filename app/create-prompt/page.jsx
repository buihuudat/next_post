"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreatePrompt = () => {
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios
        .post("/api/prompt/new", {
          prompt: post.prompt,
          tag: post.tag,
          creator: session.user?.id,
        })
        .then((res) => {
          if (res) {
            router.push("/");
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type={"Create"}
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
