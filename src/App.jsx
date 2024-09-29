import SideNavGrid from "./components/SideNavGrid";
import DynamicHeadline from "./components/DynamicHeadline";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <SideNavGrid />
        <DynamicHeadline />
        {/* <div className="flex justify-center">
          <div>Made with Love</div>
        </div> */}
      </RecoilRoot>
    </>
  );
}

export default App;
