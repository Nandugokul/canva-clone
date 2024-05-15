import { Link } from "react-router-dom";

const SidePanel = () => {
  return (
    <section className="bg-blue-200 h-screen">
      <h1 className="bg-black text-white p-4">logo section</h1>
      <div className="p-4 space-y-2">
        <Link to="/" className="sideBarSelection text-white">
          Home
        </Link>
        <Link to="/templates" className="sideBarDeSelected">
          Templates
        </Link>
      </div>
    </section>
  );
};

export default SidePanel;
