import React from "react";
import styled from "styled-components";
import UiIcon, { Icons } from "../UI/UiIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Route {
  iconName: Icons;
  path: string;
  name: string;
}

export default function DashbordSideBar() {
  const mainPages: Route[] = [
    {
      path: "/",
      name: "dashboard",
      iconName: "DashBoardIcon",
    },
    {
      path: "/balances",
      name: "Balances",
      iconName: "BalanceIcon",
    },
    {
      path: "/transactions",
      name: "Transactions",
      iconName: "TransactionIcon",
    },
    {
      path: "/analytics",
      name: "Analytics",
      iconName: "AnalyticsIcon",
    },
    {
      path: "/marketing",
      name: "Marketing",
      iconName: "MarketingIcon",
    },
    {
      path: "/exchangerates",
      name: "Exchange rates",
      iconName: "ExchangeRatesIcon",
    },
  ];

  const Acceptpayments: Route[] = [
    {
      path: "/checkout",
      name: "Checkout",
      iconName: "CheckoutIcon",
    },
    {
      path: "/payment-links",
      name: "Payment Links",
      iconName: "PaymentLinksIcon",
    },
  ];

  const Sendpayments: Route[] = [
    {
      path: "/wire",
      name: "Wire",
      iconName: "WireIcon",
    },
  ];

  //   const navigate = useNavigate();
  //   const appLocation = useLocation();

  //   function isRouteActive(route: string) {
  //     if (route === "/") return route === appLocation.pathname;

  //     return appLocation.pathname.includes(route);
  //   }

  return (
    <Sidebar>
      <LogoContainer>
        <UiIcon size={83.98} icon="Klasha" />
      </LogoContainer>
      <div className="sidebar_inner">
        <SubTitle>Main pages</SubTitle>
        {mainPages.map((route, index) => (
          <Tab key={index}>
            <UiIcon icon={route.iconName} />
            <div className="tablist_text">{route.name}</div>
          </Tab>
        ))}
        <br />
        <SubTitle>Accept payments</SubTitle>
        {Acceptpayments.map((route, index) => (
          <Tab key={index}>
            <UiIcon icon={route.iconName} />
            <div className="tablist_text">{route.name}</div>
          </Tab>
        ))}
        <br />
        <SubTitle>Send payments</SubTitle>
        {Sendpayments.map((route, index) => (
          <Tab key={index}>
            <UiIcon  icon={route.iconName} />
            <div className="tablist_text">{route.name}</div>
          </Tab>
        ))}
        <br />
        <Support>
          <UiIcon icon="SupportIcon" size={20}/>
          <span>Support</span>
        </Support>
        <br/>
        <HidePanel>
           <UiIcon icon="Arrowlefticon" size={20}/>
           <span>Hide Panel</span>
        </HidePanel>
      </div>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  background: var(--color-primary-250);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  max-width: 256px;
  width: 20vw;

  .sidebar_inner {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    margin-left: 50px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 50px;
`;

const SubTitle = styled.div`
  color: var(--color-primary-150);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Tab = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    svg {
      stroke: var(--color-primary-200);
      fill: var(--color-primary-200);
    }

    .tablist_text {
      color: var(--color-primary-200);
      font-size: 16px;
      margin-left: 10px;
    }
  }

  svg {
    stroke: var(--color-primary-100);
    fill: var(--color-primary-100);
  }

  .tablist_text {
    color: var(--color-primary-100);
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Support = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  width: 100px;
  border-radius: 20px;
  text-align: center;
  background: var(--color-primary-200);
  color: var(--colot-primary-300);
  cursor: pointer;


  span {
    display: block;
    font-size: 12px;
  }
`;

const HidePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  width: 100px;
  border:1px solid var(--color-primary-50);
  border-radius: 10px;
  text-align: center;
  background: var(--color-primary-300);
  color: var(--colot-primary-50);
  cursor: pointer;

  svg{
    stroke: var(--color-primary-50);
    fill: var(--color-primary-50);
  }

  span {
    display: block;
    font-size: 12px;
  }
`
