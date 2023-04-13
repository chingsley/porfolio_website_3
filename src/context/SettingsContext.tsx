import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';
import { ViewType } from '../types/settings.types';

interface ISettingsContext {
  viewType: ViewType;
  setViewType: Dispatch<SetStateAction<"grid" | "list">>;
}

const SettingsContext = createContext<ISettingsContext | null>(null);

const SettingsProvider = (props: { children: React.ReactNode; }) => {
  const [viewType, setViewType] = useState<ViewType>('grid');

  return (
    <SettingsContext.Provider
      value={{
        viewType,
        setViewType
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};

export default SettingsProvider;