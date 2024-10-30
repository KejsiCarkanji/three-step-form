import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import useSteps from '../hooks/useSteps';

export default function FormStep() {
    const { step, values, saveValues, handleNext, handlePrevious, handleSave } = useSteps();

    return (
        <>
            {step === 1 && (
                <Step1 values={values} saveValues={saveValues} handleNext={handleNext} />
            )}
            {step === 2 && (
                <Step2 values={values} saveValues={saveValues} handleNext={handleNext} handlePrevious={handlePrevious} />
            )}
            {step === 3 && (
                <Step3 values={values} saveValues={saveValues} handlePrevious={handlePrevious} handleSave={handleSave} />
            )}
        </>
    );
}
