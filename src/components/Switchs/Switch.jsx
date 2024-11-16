const Switch = ({ actived, action}) => {
    return (
      <div 
        onClick={action} 
        className={`transition-all duration-300 flex w-12 ${actived ? 'justify-end' : 'justify-start'} bg-primary-marine-blue p-1 rounded-full cursor-pointer`}
      >
        
        <div 
          className="w-4 h-4 bg-white rounded-full cursor-pointer transition-transform transform duration-500" 
          style={{ transform: actived ? 'translateX(10%)' : 'translateX(0)' }}
        ></div>
        
      </div>
    );
  };
  
  export default Switch;
  