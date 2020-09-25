import React, { useState } from "react";
import styled from "styled-components";

import SickNames from "./SickNames";
import StepAction from "./StepAction";

const Container = styled.section`
  width: 700px;
  padding: 30px 40px 40px;
  height: 90vh;
  background-color: #292929;
  color: white;
`;

function VotingContainer() {
  const [currentSickSelected, setCurrentSickSelected] = useState("");
  const [sickNamesList, setSickNamesList] = useState([]);
  const [step, setStep] = useState(1);

  return (
    <Container>
      <SickNames
        sickNamesList={sickNamesList}
        setSickNamesList={setSickNamesList}
        step={step}
        setStep={setStep}
        currentSickSelected={currentSickSelected}
        setCurrentSickSelected={setCurrentSickSelected}
      ></SickNames>
      <StepAction
        sickNamesList={sickNamesList}
        setSickNamesList={setSickNamesList}
        step={step}
        setStep={setStep}
        currentSickSelected={currentSickSelected}
        setCurrentSickSelected={setCurrentSickSelected}
      ></StepAction>
    </Container>
  );
}

export default VotingContainer;
