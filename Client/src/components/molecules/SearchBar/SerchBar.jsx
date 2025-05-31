import React from "react";
import { StyleSearchBar } from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ search, setSearch }) {
  return (
    <StyleSearchBar>
      <SearchIcon />
      <input
        placeholder="Search with prompt or name..."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          color: "inherit",
          background: "transparent",
          fontSize: "16px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </StyleSearchBar>
  );
}

export default SearchBar;
