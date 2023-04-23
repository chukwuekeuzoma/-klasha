import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const PageError = lazy(() => import("../Components/Errors/PageError"));

// LAYOUTS
const DashBoardLayout = lazy(() => import("../Layouts/DashBoardLayout"));

//DASHBOARD

const SalesOverView = lazy(() => import("../Pages/SalesOverview"));
const TransactionHistory = lazy(() => import("../Pages/Transactionhistory"));

const router = createBrowserRouter([
  {
    path: "/",
    id: "Dashboard",
    element: <DashBoardLayout />,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        id: "dashboard",
        element: <SalesOverView />,
      },
      {
        path: "/transactions",
        id: "transactions",
        element: <TransactionHistory />,
      },
    ],
  },
]);

export default router;
