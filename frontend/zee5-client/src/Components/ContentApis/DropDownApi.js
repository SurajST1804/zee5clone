import { createContext, useState } from "react";
export let DropDownApi = createContext();

let DropDownApiProvider = ({ children }) => {
  let [state, setState] = useState(false);
  let makeToggleIt = () => {
    setState(!state);
  };
  return (
    <DropDownApi.Provider value={{ state, makeToggleIt }}>
      {children}
    </DropDownApi.Provider>
  );
};

export default DropDownApiProvider;
