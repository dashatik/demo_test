import React, { createContext, useContext, useState } from 'react';

interface WizardState {
  region: string;
  drRegion: string;
  cloudProvider: string;
  clusterName: string;
  selectedApps: string[];
  setRegion: (val: string) => void;
  setDrRegion: (val: string) => void;
  setCloudProvider: (val: string) => void;
  setClusterName: (val: string) => void;
  setSelectedApps: (val: string[]) => void;
}

const WizardContext = createContext<WizardState | undefined>(undefined);

export const WizardProvider = ({ children }: { children: React.ReactNode }) => {
  const [region, setRegion] = useState('');
  const [drRegion, setDrRegion] = useState('');
  const [cloudProvider, setCloudProvider] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  return (
    <WizardContext.Provider
      value={{
        region,
        drRegion,
        cloudProvider,
        clusterName,
        selectedApps,
        setRegion,
        setDrRegion,
        setCloudProvider,
        setClusterName,
        setSelectedApps,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export const useWizard = (): WizardState => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
};