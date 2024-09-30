import { FaRegUser, FaUser } from 'react-icons/fa'
import { RiStarLine, RiStarFill, RiSendPlaneLine, RiSendPlaneFill } from "react-icons/ri";

import "./Steps.css"

const Steps = ({ currentStep}) => {

  return (
    <div className="Steps">
      <div className={`step ${currentStep >= 0 && "active"}`}>
        { currentStep <=0 ? <FaRegUser /> : <FaUser /> }
        <p>Identificação</p>
      </div>
      <div className={`step ${ currentStep >=1 && "active"}`}>
        { currentStep <= 1 ? <RiStarLine /> : <RiStarFill/> }        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 && "active"}`}>
        <RiSendPlaneLine />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps