/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import TestPage from "../pages/TestPage/TestPage";
import Chess from "../pages/Chess/Chess"
import BuyorNot from "../pages/BuyorNot/BuyorNot";
const RouteContext = createContext();
function RouteContextProvider({ children }) {
  const routes = Routes();
  const value = {
    routes,
  };
  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
}
function useRouteContext() {
  const context = useContext(RouteContext);
  return context;
}
export { useRouteContext, RouteContextProvider };
function Routes() {
  const Buy = {
    name: "buy",
    image: "",
    path: "buy",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <BuyorNot />,
      },
    ],
  };
  const test = {
    name: "test",
    image: "",
    path: "hello_world",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TestPage />,
      },
    ],
  };
  const ChessPage = {
    name: "Chess",
    image: "",
    path: "chess",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Chess />,
      },
    ],
  };
  const routes = [test, ChessPage, Buy];
  return routes;
}
//  {
//   name: "test",
//   route: "hello-world",
//   path: "hello-world",
//   element: <Outlet />,
//   children: [
//     {
//       name: "帳號管理",
//       route: "hello-world",
//       path: "hello-world",
//       element: <Outlet />,
//       children: [
//         {
//           index: true,
//           element: <TestPage />,
//         },
//       ],
//     },
//   ],
// }
