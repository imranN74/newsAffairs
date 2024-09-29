import Sidebar from "./Sidebar";
import Header from "./Header";

function SideNavGrid() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 ">
        <Header />
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
}

export default SideNavGrid;
