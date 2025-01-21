import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
/*------------------------------ Main ------------------------------ */
import HomePage from "./pages/HomePage/HomePage";
import TestPage from "./pages/TestPage/TestPage";
import Chess from "./pages/Chess/Chess";
import BuyorNot from "./pages/BuyorNot/BuyorNot";
/*------------------------------ Main ------------------------------ */
import AppLayout from "./components/AppLayout/AppLayout";
import AppLoginLayout from "./components/AppLoginLayout/AppLoginLayout";
import AccountLogin from "./pages/AccountLogin/AccountLogin";
import { RouteContextProvider, useRouteContext } from "./contexts/RouteContext";
function App() {
  /*------------------------------ Context ------------------------------ */
  const { routes } = useRouteContext();
  const routesForRouter = [
    {
      path: "/login",
      element: <AppLoginLayout />,
      children: [
        {
          index: true,
          element: <AccountLogin />,
        },
      ],
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          name: "倒數",
          path: "test",
          element: <TestPage />,
        },
        {
          name: "西洋棋",
          path: "Chess",
          element: <Chess />,
        },
        {
          name: "買!!!",
          path: "BuyorNot",
          element: <BuyorNot />,
        },
        // ...routes,
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];
  const router = createBrowserRouter(routesForRouter);
  return <RouterProvider router={router}></RouterProvider>;
}

function AppWithProvider() {
  return (
    <RouteContextProvider>
      <App></App>
    </RouteContextProvider>
  );
}

export default AppWithProvider;
