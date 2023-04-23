import styled from "styled-components";
import { List, X, Question } from "phosphor-react";

import {
  ArrowDown,
  Piechart,
  Arrowleft,
  Group733,
  Wallet,
  DropDown,
  Fliter,
  Group699,
  Group735,
  Paymentlink,
  Profile,
  Radar,
  Search,
  Shoppingcart,
  Transactions,
  KlashalogoCheck,
} from "../../assets/svgs";

// These icons should be arranged alphabetically for easy sorting
const icons = {
  Arrowlefticon: <Arrowleft />,
  ArrowDownIcon: <ArrowDown />,
  AnalyticsIcon: <Group733 />,
  BalanceIcon: <Wallet />,
  CheckoutIcon: <Shoppingcart />,
  DashBoardIcon: <Piechart />,
  DropDownIcon: <DropDown />,
  ExchangeRatesIcon: <Group699 />,
  FliterIcon: <Fliter />,
  Klasha: <KlashalogoCheck />,
  List: <List />,
  MarketingIcon: <Radar />,
  PaymentLinksIcon: <Paymentlink />,
  ProfileIcon: <Profile />,
  SupportIcon: <Question />,
  SearchIcon: <Search />,
  TransactionIcon: <Group735 />,
  WireIcon: <Transactions />,
  X: <X />,
};

export type Icons = keyof typeof icons;

interface Props {
  /** Name of the icon as stored in the icons object */
  icon: Icons;
  size?: number;
}

export default function UiIcon({ icon, size = 18 }: Props) {
  return <IconStyle size={size}>{icons[icon]}</IconStyle>;
}

const IconStyle = styled.span`
  font-size: ${({ size }: { size: number }) => size}px;
  svg {
    height: ${({ size }: { size: number }) => size}px;
    width: ${({ size }: { size: number }) => size}px;
  }
`;
