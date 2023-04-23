import React, { useState } from "react";
import styled from "styled-components";
import DashBoardTopNav from "../Components/Layout/DashBoardTopNav";
import DashbordSideBar from "../Components/Layout/DashbordSideBar";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  const [toogleHumbuger, setToogleHambuger] = useState<boolean>(false);

  return (
    <Layout>
      <DashbordSideBar
        toogleHumbuger={toogleHumbuger}
        ClosetoogleHumbugerFunc={setToogleHambuger}
      />
      <Body>
        <DashBoardTopNav
          toogleHumbuger={toogleHumbuger}
          toogleHumbugerFunc={setToogleHambuger}
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
  overflow-y: scroll;
  width: 100%;
  border-top: none;
  position: static;

  .body-inner {
    margin-left: 20px;
    margin-top: 20px;
  }
`;
