import React, { useState, createContext } from "react";

export const QueryContext = createContext();

export const QueryStateProvider = (props) => {
  const [query, setQuery] = useState("wanderlust");

  return (
    <QueryContext.Provider value={[query, setQuery]}>
      {props.children}
    </QueryContext.Provider>
  );
};
