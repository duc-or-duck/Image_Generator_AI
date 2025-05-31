import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { HeadLine, StyleDashBoard, StyleTypography } from "./Dashboard.style";
import SearchBar from "../../components/molecules/SearchBar/SerchBar";
import {
  CardWrapper,
  StyleContentWrapper,
} from "../../components/molecules/SearchBar/SearchBar.style";
import CustomCard from "../../components/molecules/CardItem/CardItem";

function DashBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8080/api/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any necessary headers, e.g., Authorization if required
          // "Authorization": `Bearer ${yourToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data.data || []); // Adjust based on API response structure
      setFilteredPosts(data.data || []); // Initialize filteredPosts
    } catch (error) {
      setError(error.message || "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
      return;
    }

    const searchFilteredPosts = posts.filter((post) =>
      [post?.prompt, post?.name].some((field) =>
        field?.toLowerCase().includes(search.toLowerCase())
      )
    );

    setFilteredPosts(searchFilteredPosts);
  }, [search, posts]);

  return (
    <StyleDashBoard>
      <HeadLine>Explore popular posts in the Community!</HeadLine>
      <StyleTypography>⦿ Generated with AI ⦿</StyleTypography>
      <SearchBar search={search} setSearch={setSearch} />

      <StyleContentWrapper>
        <CardWrapper>
          {loading ? (
            <Typography>Loading posts...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : filteredPosts.length === 0 ? (
            <Typography>No Posts Found</Typography>
          ) : (
            filteredPosts.map((item) => (
              <CustomCard key={item._id} item={item} />
            ))
          )}
        </CardWrapper>
      </StyleContentWrapper>
    </StyleDashBoard>
  );
}

export default DashBoard;
