import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import { Stack } from "@mui/material";
import DashBoard from "./pages/Dashboard/dashboard";
import CreatePostPage from "./pages/CreatePost/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/molecules/Navbar/Navbar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textPrimary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<DashBoard />} exact />
              <Route path="/post" element={<CreatePostPage />} exact />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
