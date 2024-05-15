import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import Templates from "./pages/templates-page/Templates";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/templates",
      element: <Templates />,
    },
  ]);
  return (
    <DashboardLayout>
      <RouterProvider router={router} />
    </DashboardLayout>
  );
}
