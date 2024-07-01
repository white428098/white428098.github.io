/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import TestPage from "../pages/TestPage/TestPage";
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
  const routes = [test];
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
