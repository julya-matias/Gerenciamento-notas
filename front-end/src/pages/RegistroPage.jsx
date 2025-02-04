import React from "react";
import FormRegistro from "../components/FormRegistro";

const RegistroPage = ({ aluno, setAluno }) => {
  return (
    <div className="page">
      <FormRegistro aluno={aluno} setAluno={setAluno} />
    </div>
  );
};

export default RegistroPage;
