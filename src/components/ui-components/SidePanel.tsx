import { Link, useLocation } from "react-router-dom";

const SidePanel = () => {
  const location = useLocation();

  return (
    <section className="bg-blue-200 h-screen">
      <h1 className="bg-black text-white p-4">logo section</h1>
      <div className="p-4 space-y-2 flex flex-col">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "sideBarSelection "
              : "sideBarDeSelected"
          }
        >
          Home
        </Link>
        <Link
          to="/templates"
          className={
            location.pathname === "/templates"
              ? "sideBarSelection"
              : "sideBarDeSelected"
          }
        >
          Templates
        </Link>
      </div>
    </section>
  );
};

export default SidePanel;
