const GoBackStepBtn = ({action}) => {
  return (
    <button onClick={action} className="py-2 px-4 transition-all hover:text-primary-marine-blue text-neutral-cool-gray font-medium rounded-lg">
      Go Back
    </button>
  );
};

export default GoBackStepBtn;
