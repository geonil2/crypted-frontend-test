import React from "react";
import { Outlet } from "react-router-dom";
import { COLORS } from "src/config/styles";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.grayScale01};
`;

const HomeLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default HomeLayout;
