import { useLocation } from "react-router-dom";
import NavigationBar from "../components/ui-components/NavigationBar";
import SidePanel from "../components/ui-components/SidePanel";
import HomePage from "../pages/home-page/HomePage";
import Templates from "../pages/templates-page/Templates";

const DashboardLayout = () => {
  const location = useLocation();
  let mainContent;
  switch (location.pathname) {
    case "/":
      mainContent = <HomePage />;
      break;
    case "/templates":
      mainContent = <Templates />;
      break;
    default:
      mainContent = null;
  }
  return (
    <section className="w-full h-screen bg-blue-100 flex">
      <aside className="w-1/6">
        <SidePanel />
      </aside>
      <section className="w-full h-screen flex flex-col">
        <NavigationBar />
        <main className="m-2 overflow-hidden">{mainContent}</main>
      </section>
    </section>
  );
};
export default DashboardLayout;
