// These icons should be arranged alphabetically for easy sorting
import styled from "styled-components";
import DashBoardIcon from "../../assets/svgs/pie-chart.svg";
import BalanceIcon from "../../assets/svgs/wallet.svg";
import TransactionIcon from "../../assets/svgs/Group735.svg";
import AnalyticsIcon from "../../assets/svgs/Group733.svg";
import MarketingIcon from "../../assets/svgs/radar.svg";
import ExchangeRatesIcon from "../../assets/svgs/Group699.svg";
import CheckoutIcon from "../../assets/svgs/shoppingcart.svg";
import PaymentLinksIcon from "../../assets/svgs/paymentlink.svg";
import WireIcon from "../../assets/svgs/transactions.svg";
import SupportIcon from "../../assets/svgs/Support.svg";
import ArrowLeftIcon from "../../assets/svgs/ArrowLeft.svg";
import DropDownIcon from "../../assets/svgs/dropdown.svg";
import ProfileIcon from "../../assets/svgs/profile.svg";
import ArrowDownIcon from "../../assets/svgs/Arrowdown.svg";
import SearchIcon from "../../assets/svgs/Search.svg";
import FliterIcon from "../../assets/svgs/Fliter.svg"

// These icons should be arranged alphabetically for easy sorting
const icons = {
  DashBoardIcon: <DashBoardIcon/>,
  BalanceIcon:<BalanceIcon />,
  TransactionIcon:<TransactionIcon />,
  AnalyticsIcon:<AnalyticsIcon />, 
  MarketingIcon:<MarketingIcon/>,
  ExchangeRatesIcon:<ExchangeRatesIcon/>,
  CheckoutIcon:<CheckoutIcon/>,
  PaymentLinksIcon:<PaymentLinksIcon/>,
  WireIcon:<WireIcon/>,
  SupportIcon:<SupportIcon/>,
  ArrowLeftIcon:<ArrowLeftIcon/>,
  DropDownIcon:<DropDownIcon/>,
  ProfileIcon:<ProfileIcon/>,
  ArrowDownIcon:<ArrowDownIcon/>,
  SearchIcon:<SearchIcon/>,
  FliterIcon:<FliterIcon/>
};

export type Icons = keyof typeof icons;

interface Props {
  /** Name of the icon as stored in the icons object */
  icon: Icons;
  size?: string;
}

export default function UiIcon({ icon, size = "16" }: Props) {
  return <IconStyle size={size}>{icons[icon]}</IconStyle>;
}

const IconStyle = styled.span`
  font-size: ${({ size }: { size?: Props["size"] }) =>
    pxToRem((size && parseInt(size)) || 16)};
`;

