import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TitleStep from "../In Steps/TitleStep";
import DescriptionStep from "../In Steps/DescriptionStep";
import NextStepBtn from "../Buttons/NextStepBtn";
import GoBackStepBtn from "../Buttons/PreviouStepBtn";
import addons from "../../data/addons.json";

const Step3 = () => {
  const navigate = useNavigate();
  const [selectedAddon, setSelectedAddon] = useState([]);

  const toggleAddon = (addon) => {
    setSelectedAddon((prevSelected) => {
      if (prevSelected.find((selected) => selected.id === addon.id)) {
        return prevSelected.filter((selected) => selected.id !== addon.id);
      } else {
        return [...prevSelected, addon];
      }
    });
  };

  const location = useLocation();
  const { plan, typePlan, pricePlan } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/finally", {
      state: { plan, typePlan, pricePlan, selectedAddon },
    });
    console.log("Selected addons:", selectedAddon);
  };

  const period = (typePlan === "monthly" ? "mo" : "yr") || "mo";

  return (
    <div className="flex flex-col p-[4rem] gap-4">
      <div className="flex flex-col gap-3">
        <TitleStep title={"Pick add-ons"} />
        <DescriptionStep
          descriptionStep={"Add-ons help center enhance your gaming experience"}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          {addons.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAddon(item)}
              className={`flex items-center justify-between py-2 px-4 border rounded-lg ${
                selectedAddon.find((addon) => addon.id === item.id)
                  ? "border-primary-purplish-blue"
                  : ""
              } cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={
                    !!selectedAddon.find((addon) => addon.id === item.id)
                  }
                  onChange={() => toggleAddon(item)}
                  
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm text-primary-marine-blue font-medium">
                    {item.Title}
                  </h1>
                  <h2 className="text-neutral-cool-gray text-xs">
                    {item.Description}
                  </h2>
                </div>
              </div>
              <h2 className="text-primary-purplish-blue text-sm font-medium">
                +${item.Prices[typePlan] || item.Prices.monthly}/{period}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex min-w-full gap-2 mt-3 justify-between">
          <GoBackStepBtn action={() => navigate("/youplan")} />
          <NextStepBtn />
        </div>
      </form>
    </div>
  );
};

export default Step3;
