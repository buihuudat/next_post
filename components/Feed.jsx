"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import PromptCardList from "./PromptCardList";
import axios from "axios";

const Feed = () => {
  const [allPrompt, setAllPrompt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getPrompts = async () => {
      await axios
        .get("/api/prompt")
        .then((res) => {
          setAllPrompt(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPrompts();
  }, []);

  const handleSearchChange = (e) => {};

  const handleTagClick = (e) => {};

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* all prompts */}
      {searchText ? (
        <PromptCardList data={[]} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={allPrompt} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
