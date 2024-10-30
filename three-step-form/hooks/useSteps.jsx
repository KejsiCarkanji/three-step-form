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
        const storedValues = JSON.parse(localStorage.getItem('values')) || {
            name: '',
            surname: '',
            age: '',
            gender: '',
            companyName: '',
            companyCode: ''
        };
        console.log(storedValues);
        setValues(storedValues);
    }, []);

    const saveValues = (newValues) => {
        setValues((prevValues) =>  ({ ...prevValues, ...newValues }));
    };

    console.log("values", values);

    const handleNext = () => {
        setStep((prev) => prev + 1);
        localStorage.setItem("values", JSON.stringify(values));
        
        console.log("next values", values);
        console.log(step)
    }
    
    const handlePrevious = () => setStep((prev) => prev - 1);

    const handleSave = () => {
        localStorage.setItem("values", JSON.stringify(values));
        setStep(1);
        setValues({
            name: '',
            surname: '',
            age: '',
            gender: '',
            companyName: '',
            companyCode: ''
        });
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
