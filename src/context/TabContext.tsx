import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface TabsContext {
  toggleButton: number;
  setToggleButton: Dispatch<SetStateAction<number>>;

  lastKey: string;
  setLastKey: Dispatch<SetStateAction<string>>;

  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>;

  clipBoard: string;
  setClipBoard: Dispatch<SetStateAction<string>>;

  displayText: string[];
  setDisplayText: Dispatch<SetStateAction<string[]>>;

  afterBtn: boolean;
  resetAfterBtn: Dispatch<SetStateAction<boolean>>;
}

const TabContext = createContext<any>(0);

const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [toggleButton, setToggleButton] = useState<number>(1);
  const [lastKey, setLastKey] = useState<string>("");
  const [mainColor, setMainColor] = useState<string>("rgba(0, 39, 211, 0.7)");
  const [clipBoard, setClipBoard] = useState<string>("");
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [afterBtn, resetAfterBtn] = useState<boolean>(true);

  const contextValue: TabsContext = {
    mainColor,
    setMainColor,
    toggleButton,
    setToggleButton,
    lastKey,
    setLastKey,
    clipBoard,
    setClipBoard,
    displayText,
    setDisplayText,
    afterBtn,
    resetAfterBtn,
  };

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export { TabContext, TabContextProvider };
