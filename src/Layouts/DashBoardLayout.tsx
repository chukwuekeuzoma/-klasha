import React, { useState } from "react";
import styled from "styled-components";
import DashBoardTopNav from "../Components/Layout/DashBoardTopNav";
import DashbordSideBar from "../Components/Layout/DashbordSideBar";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  return (
    <Layout>
      <DashbordSideBar
        menuIsVisible={menuIsVisible}
        toggleMenu={setMenuIsVisible}
      />
      <Body>
        <DashBoardTopNav
          menuIsVisible={menuIsVisible}
          toggleMenu={setMenuIsVisible}
        />
        <div className="body-inner">
          <Outlet />
        </div>
      </Body>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--color-primary-300);
  overflow: hidden;
  max-width: 2000px;
  margin: auto;
`;

const Body = styled.div`
  position: relative;
  overflow-x: auto;
  width: 100%;
  border-top: none;
  position: static;
  overflow-y: scroll;

  .body-inner {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;
