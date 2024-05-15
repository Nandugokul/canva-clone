import NavigationBar from "../components/ui-components/NavigationBar";
import SidePanel from "../components/ui-components/SidePanel";

const DashboardLayout = (props: any) => {
  return (
    <section className="w-full h-screen bg-blue-100 flex">
      <aside className="w-1/6">
        <SidePanel />
      </aside>
      <section className="w-full">
        <NavigationBar />
        {props.children}
      </section>
    </section>
  );
};
export default DashboardLayout;
