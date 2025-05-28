import React from "react";
import { StyleSearchBar } from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
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
      />
    </StyleSearchBar>
  );
}

export default SearchBar;
