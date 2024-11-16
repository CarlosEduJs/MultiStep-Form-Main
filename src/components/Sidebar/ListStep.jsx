import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import listSteps from "../../data/steps.json";

const ListStep = () => {
  const location = useLocation();
  const locationName = location.pathname || 1;
  const [selectedStep, setSelectedStep] = useState(locationName);

  useEffect(() => {
    setSelectedStep(locationName);
  }, [locationName]);

  return (
    <aside className="py-8 px-12 flex md:flex-col gap-6 md:rounded-lg md:min-h-full max-md:w-full max-md:justify-center  max-md:fixed max-md:top-0 max-md:left-0 max-md:h-[10rem] max-md:items-start">
      {listSteps.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <h1
            className={`${
              selectedStep === item.path || selectedStep === item.path2
                ? "bg-primary-pastel-blue text-primary-marine-blue"
                : "bg-none border text-white"
            } font-bold p-2 flex items-center justify-center text-[14px] rounded-full w-8 h-8`}
          >
            {item.id}
          </h1>
          <div className="flex flex-col gap-1 max-md:hidden">
            <h1 className="text-neutral-light-gray text-xs step">
              {item.step.toUpperCase()}
            </h1>
            <h1 className="text-white text-sm font-bold tracking-wider">
              {item.stepName.toUpperCase()}
            </h1>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ListStep;
