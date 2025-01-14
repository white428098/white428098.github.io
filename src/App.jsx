import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
/*------------------------------ Main ------------------------------ */
import TestPage from "./pages/TestPage/TestPage";
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
          element: <TestPage />,
        },
        ...routes,
      ],
    },
    {
      path: "*",
      element: <Navigate to="/hello_world" />,
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
