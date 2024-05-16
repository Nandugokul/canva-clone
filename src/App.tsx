import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import Templates from "./pages/templates-page/Templates";
import ErrorPage from "./pages/404-page/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/templates",
          element: <Templates />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
