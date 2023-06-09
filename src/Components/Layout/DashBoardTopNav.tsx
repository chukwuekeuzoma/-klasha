import React from "react";
import styled from "styled-components";
import UiIcon from "../UI/UiIcon";

interface Props {
  menuIsVisible: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashBoardTopNav({
  menuIsVisible,
  toggleMenu,
}: Props) {
  return (
    <TopNav>
      <div className="list">
        <UiIcon
          icon="List"
          size={30}
          onClick={() => toggleMenu(!menuIsVisible)}
        />
      </div>
      <div className="top-nav-inner">
        <div className="iconstyle">
          <UiIcon icon="ProfileIcon" size={25} />
          <UiIcon icon="ArrowDownIcon" />
        </div>
        <div className="iconstyle">
          <span>EN</span>
          <UiIcon icon="ArrowDownIcon" />
        </div>
      </div>
    </TopNav>
  );
}

const TopNav = styled.nav`
  background-color: #ffffff;
  border-bottom: 1px solid var(--color-primary-350);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .top-nav-inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .iconstyle {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 12px;
  }

  .list {
    display: none;

    @media only screen and (max-width: 1400px) {
      display: block;
    }
  }

  @media only screen and (max-width: 1400px) {
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
  }
`;
