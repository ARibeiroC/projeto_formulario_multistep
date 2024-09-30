// COMPONENTS
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// HOOKS
import useForm from "./hooks/useForm";

import "./App.css";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const[data, setData] = useState(formTemplate);

  const updateFieldHendler = (key, value)=>{
    setData((prev)=> {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHendler={updateFieldHendler}/>,
    <ReviewForm data={data} updateFieldHendler={updateFieldHendler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeStep(currentStep + 1, e);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={handleSubmit}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                id="back"
                type="button"
                onClick={(e) => changeStep(currentStep - 1, e)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
