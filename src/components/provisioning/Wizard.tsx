import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WizardProvider } from './WizardContext';
import Step1Select from './Step1Select';
import Step2Connect from './Step2Connect';
import Step3Deploy from './Step3Deploy';

export default function WizardFlow() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const goToNext = () => setStep((prev) => prev + 1);
  const goToPrev = () => setStep((prev) => prev - 1);
    const handleFinish = () => {
    // ✅ Redirect to dashboard (Overview page)
    navigate('/');
  };

  return (
    <WizardProvider>
      {step === 1 && <Step1Select onContinue={goToNext} />}
      {step === 2 && <Step2Connect onContinue={goToNext} onBack={goToPrev} />}
      {step === 3 && <Step3Deploy onContinue={handleFinish} onBack={goToPrev} />}
    </WizardProvider>
  );
}