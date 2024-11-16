const InputField = ({ label, type, error, placeholder, onChange, value }) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <div className="flex items-center justify-between">
        <label className="text-[14px] text-primary-marine-blue">{label}</label>
        {error && (
          <span className="text-xs text-red-500 text-right font-bold">{error}</span>
        )}
      </div>
      <div className="relative flex items-center">
        <input
          className={`border p-2 px-3 ${error ? 'border-red-500' : ''} rounded-md focus:outline-primary-marine-blue text-black text-[14px] w-full`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
