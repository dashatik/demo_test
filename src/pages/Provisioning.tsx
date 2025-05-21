import { useState } from "react";
import Step1Select from "../components/provisioning/Step1Select";
import Step2Connect from "../components/provisioning/Step2Connect";
import Step3Deploy from "../components/provisioning/Step3Deploy";
import Overview from "../pages/Overview"; // Step 4
import { useNavigate } from "react-router-dom";


export default function Provisioning() {
  const [step, setStep] = useState(1);
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [cloudConfig, setCloudConfig] = useState<any>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {step === 1 && (
        <Step1Select
          onContinue={(apps) => {
            setSelectedApps(apps);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <Step2Connect
          onContinue={(config) => {
            setCloudConfig(config);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}

        {step === 3 && (
        <Step3Deploy
            onContinue={() => {
            localStorage.setItem("onboarded", "true");
            navigate("/");
            }}
            onBack={() => setStep(2)}
        />
        )}

      {step === 4 && (
        <Overview selectedApps={selectedApps} cloudConfig={cloudConfig} />
      )}
    </div>
  );
}