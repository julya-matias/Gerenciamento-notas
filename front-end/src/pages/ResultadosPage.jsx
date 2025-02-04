import React from "react";
import Resultados from "../components/Resultados";

const ResultsPage = ({ aluno }) => {
  return (
    <div className="page">
      <Resultados aluno ={aluno} />
    </div>
  );
};

export default ResultsPage;
