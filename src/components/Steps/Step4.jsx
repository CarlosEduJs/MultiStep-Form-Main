import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TitleStep from "../In Steps/TitleStep";
import DescriptionStep from "../In Steps/DescriptionStep";

import ConfirmBtn from "../Buttons/Confirms";
import GoBackStepBtn from "../Buttons/PreviouStepBtn";

import CheckFill from "../../assets/images/icon-thank-you.svg";

const Step4 = () => {
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, typePlan, pricePlan, selectedAddon } = location.state || {};

  const totalPrice = selectedAddon.reduce(
    (acc, item) => acc + item.Prices[typePlan],
    pricePlan
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirming(true);
  };

  return (
    <div className="flex flex-col p-[4rem] gap-4">
      {confirming ? (
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={CheckFill} alt="thankyou" />
          <h1 className="text-2xl font-semibold text-primary-marine-blue">
            Thank You!
          </h1>
          <h2 className="text-neutral-cool-gray text-xs">
            Thanks for confirming you subscription! We hope you have <br /> fun
            using our platform. If you ever need suport, please feel <br /> free
            to email us at suppoet@loremgaming.com.
          </h2>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <TitleStep title={"Finishing Up"} />
            <DescriptionStep
              descriptionStep={
                "Double-check everything looks OK before confirming."
              }
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 py-3 px-5 min-w-[350px] bg-neutral-magnolia rounded-md">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex flex-col gap-1">
                  <h1 className="text-primary-marine-blue text-sm font-medium">
                    {plan} ({typePlan})
                  </h1>
                  <h2 onClick={() => navigate("/youplan")} className="text-neutral-cool-gray cursor-pointer underline text-xs">
                    Change
                  </h2>
                </div>
                <h2 className="text-primary-marine-blue text-sm font-medium">
                  ${pricePlan}/{typePlan === "monthly" ? "mo" : "yr"}
                </h2>
              </div>
              {selectedAddon.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {selectedAddon.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <h1 className="text-neutral-cool-gray text-xs">
                        {item.Title}
                      </h1>
                      <h1 className="text-primary-marine-blue text-xs font-medium">
                        +{item.Prices[typePlan]}
                        {typePlan === "monthly" ? "mo" : "yr"}
                      </h1>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-between py-3 px-5">
              <h1 className="text-neutral-cool-gray text-sm">
                Total (per {typePlan})
              </h1>
              <h1 className="text-primary-purplish-blue font-semibold">
                +${totalPrice}/{typePlan === "monthly" ? "mo" : "yr"}
              </h1>
            </div>
            <div className="flex min-w-full justify-between gap-2">
              <GoBackStepBtn action={() => navigate("/youplan")} />
              <ConfirmBtn />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Step4;
