import React, { useEffect } from "react";
import styled from "styled-components";

import sickNames from "../utils/sick-names-list";

const Container = styled.div`
  h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 30px;
    max-height: 100%;
    overflow-y: scroll;
  }

  button {
    padding: 12px;
    background-color: #ffaebc;
    width: 100%;
    transition: 0.115s ease-in-out;
  }

  .is--active {
    background-color: #ea899b;
  }

  button:hover {
    background-color: #ea899b;
  }
`;

function SickNames({
  sickNamesList,
  setSickNamesList,
  step,
  setStep,
  currentSickSelected,
  setCurrentSickSelected,
}) {
  useEffect(() => {
    const namesOrdered = sickNames.sort();
    setSickNamesList([...namesOrdered]);
  }, []);

  const handleCurrentSick = (sickName) => {
    if (sickName === currentSickSelected) {
      setCurrentSickSelected("");
    } else {
      setCurrentSickSelected(sickName);
    }
  };

  return (
    <Container>
      <h3>Candidatos ao prêmio</h3>
      <h4>Qual seu {step}º colocado?</h4>
      <ul>
        {sickNamesList.map((name) => (
          <li>
            <button
              className={name === currentSickSelected && "is--active"}
              onClick={() => handleCurrentSick(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default SickNames;
