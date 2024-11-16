import { useState } from "react";

import { useNavigate } from "react-router-dom";

import TitleStep from "../In Steps/TitleStep";
import DescriptionStep from "../In Steps/DescriptionStep";

import NextStepBtn from "../Buttons/NextStepBtn";
import GoBackStepBtn from "../Buttons/PreviouStepBtn";

import plansList from "../../data/plans.json";

import Switch from "../Switchs/Switch";

const Step2 = () => {
  const navigate = useNavigate();
  const [actived, setActived] = useState(false);
  const [selectedPlan, setSelectPlan] = useState(1);

  const [typePlan, setTypePlan] = useState("monthly");
  const [plan, setPlan] = useState("Arcade");
  const [pricePlan, setPricePlan] = useState(9);

  const handleActiveSwitch = () => {
    setActived((prev) => !prev);
    setTypePlan((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pickaddons", { state: { plan, typePlan, pricePlan } });
    console.log("Salvos: ", plan, typePlan, pricePlan);
  };

  return (
    <div className="flex flex-col p-[4rem] gap-4">
      <div className="flex flex-col gap-3">
        <TitleStep title={"Select your plan"} />
        <DescriptionStep
          descriptionStep={"You have the option of monthly or yearly bjling."}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
          {plansList.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer flex flex-col py-4 px-3 border transition-all ${
                selectedPlan === item.planId
                  ? "border-primary-purplish-blue bg-neutral-magnolia"
                  : ""
              } rounded-lg min-w-[150px] max-sm:min-w-fit`}
              onClick={() => {
                setSelectPlan(item.planId);
                setPlan(item.planName);
                setPricePlan(item.planPrices[typePlan]);
              }}
            >
              <div className="flex sm:flex-col max-sm:gap-2 max-sm:items-center">
                <img
                  className="w-10 h-10 max-sm:w-6 max-sm:h-8"
                  src={item.planIcon}
                  alt={item.planName}
                />
                <div className="flex flex-col gap-2 ">
                  <h1 className="font-semibold text-sm sm:mt-8 text-primary-marine-blue">
                    {item.planName}
                  </h1>
                  <div className="flex flex-col">
                    <h1 className="font-light text-xs text-neutral-cool-gray">
                      ${item.planPrices[typePlan]}/
                      {typePlan === "monthly" ? "mo" : "yr"}
                    </h1>
                    {typePlan === "yearly" && (
                      <h1 className="text-xs mt-2 text-primary-marine-blue">
                        2 months free
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-8 justify-center p-2 bg-primary-light-blue/20 rounded-lg">
          <h1
            onClick={() => {
              setActived(false);
              setTypePlan("monthly");
            }}
            className={`text-semibold text-sm cursor-pointer ${
              !actived ? "text-primary-marine-blue" : "text-neutral-cool-gray"
            }`}
          >
            Monthly
          </h1>
          <Switch action={handleActiveSwitch} actived={actived} />
          <h1
            onClick={() => {
              setActived(true);
              setTypePlan("yearly");
            }}
            className={`text-semibold text-sm cursor-pointer ${
              actived ? "text-primary-marine-blue" : "text-neutral-cool-gray"
            }`}
          >
            Yearly
          </h1>
        </div>
        <div className="flex min-w-full justify-between gap-2 mt-5">
          <GoBackStepBtn GoBackStepBtn action={() => navigate("/youinfo")} />
          <NextStepBtn />
        </div>
      </form>
    </div>
  );
};

export default Step2;
