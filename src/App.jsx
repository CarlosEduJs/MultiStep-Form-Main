import { Route, Routes } from "react-router-dom";

import ListStep from "./components/Sidebar/ListStep";

import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";

function App() {
  const settingsMobile = 'max-md:fixed max-md:top-20 max-md:w-[90%] max-md:rounded-lg max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-sm:z-60 bg-white'
  return (
    <div className="flex items-center justify-center w-screen h-screen max-md:justify-normal md:bg-neutral-magnolia max-md:bg-neutral-magnolia">
      <div className="bg-white p-3 rounded-lg flex md:gap-4 shadow-sm max-md:flex-col max-md:p-0  max-md:w-[90%] max-md:h-fit max-md:mx-auto">
        <ListStep />
        <div className={`${settingsMobile}`}>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/youinfo" element={<Step1 />} />
            <Route path="/youplan" element={<Step2 />} />
            <Route path="/pickaddons" element={<Step3 />} />
            <Route path="/finally" element={<Step4 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
