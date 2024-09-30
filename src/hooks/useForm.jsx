import { useState } from "react";

function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(indice, event){
        if (indice < 0 || indice >= steps.length) return
        setCurrentStep(indice)
        // event.target.value ? setIsWriter(true) : setIsWriter(false)

    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    }
}

export default useForm 