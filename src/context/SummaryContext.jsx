import { createContext, useContext, useState } from "react";

const SummaryContext = createContext();

export const SummaryProvider = ({ children }) => {
  const [summary, setSummary] = useState([]);

  const addItem = (item) => setSummary((prevSummary) => [...prevSummary, item]);

  return (
    <SummaryContext.Provider value={{ summary, addItem }}>
      {children}
    </SummaryContext.Provider>
  );
};

export const useList = () => useContext(SummaryContext);
