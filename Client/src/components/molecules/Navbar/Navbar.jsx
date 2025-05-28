import React from "react";
import { StyleNavBar } from "./Navbar.style";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate, useLocation } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <StyleNavBar>
      GenAI
      {path[1] === "post" ? (
        <CustomButton
          variant="secondary"
          onClick={() => navigate("/")}
          text="Explore Posts"
          rightIcon={<ExploreIcon />}
        />
      ) : (
        <CustomButton
          onClick={() => navigate("/post")}
          text="Create new post"
          rightIcon={<AddCircleOutlineIcon />}
        />
      )}
    </StyleNavBar>
  );
}

export default NavBar;
