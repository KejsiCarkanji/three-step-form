import { useState, useEffect } from "react";

function useSteps() {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        name: '',
        surname: '',
        age: '',
        gender: '',
        companyName: '',
        companyCode: ''
    });

    useEffect(() => {
        const storedValues = {
            name: localStorage.getItem('name') || '',
            surname: localStorage.getItem('surname') || '',
            age: localStorage.getItem('age') || '',
            gender: localStorage.getItem('gender') || '',
            companyName: localStorage.getItem('company-name') || '',
            companyCode: localStorage.getItem('company-code') || ''
        };
        setValues(storedValues);
    }, []);

    const saveValues = (newValues) => {
        setValues((prevValues) => {
            const updatedValues = { ...prevValues, ...newValues };
            for (let key in newValues) {
                localStorage.setItem( key, newValues[key]);
            }
            return updatedValues;
        });
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
        console.log(values);
        console.log(step)
    }
    
    const handlePrevious = () => setStep((prev) => prev - 1);
    const handleSave = () => {
        localStorage.clear();
        setStep(1);
    };

    return {
        step,
        values,
        setStep,
        saveValues,
        handleNext,
        handlePrevious,
        handleSave
    };
}

export default useSteps;
