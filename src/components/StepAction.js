import React from "react";
import styled from "styled-components";

const Container = styled.div`
  button {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    background-color: #7a61c2;
    padding: 20px;
  }
`;

function StepAction({
  sickNamesList,
  setSickNamesList,
  step,
  setStep,
  currentSickSelected,
}) {
  const handleAdvanceStep = () => {
    const newSickList = sickNamesList.filter(
      (name) => name !== currentSickSelected
    );
    setSickNamesList(newSickList);
    setStep(step + 1);
  };

  return (
    <Container>
      <button onClick={handleAdvanceStep}>Avançar</button>
    </Container>
  );
}

export default StepAction;
