import React, { useState } from "react";
import axios from "axios";
import { FormContainer, Input, Button, NotaContainer } from "./styles/FormRegistro.styles";

const FormRegistro = ({ aluno, setAluno }) => {
  const [newAluno, setNewAluno] = useState({
    nome: "",
    notas: ["", "", "", "", ""],
    frequencia: "",
  });

  const validaNota = (value) => {
    const num = parseInt(value, 10);
    return !isNaN(num) && num >= 0 && num <= 10;
  };

  const validaFrequencia = (value) => {
    const num = parseInt(value, 10);
    return !isNaN(num) && num >= 0 && num <= 100;
  };


  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    // Substitui qualquer ponto ou vírgula por nada
    const sanitizedValue = value.replace(/[.,]/g, '');

    if (name === "notas" && index !== null) {
      // Permitir valor vazio para "apagar" a nota
      if (sanitizedValue === "" || validaNota(sanitizedValue)) {
        const updatedNotas = [...newAluno.notas];
        updatedNotas[index] = sanitizedValue;
        setNewAluno({ ...newAluno, notas: updatedNotas });
      } else {
        alert("Nota inválida! As notas devem ser números inteiros entre 0 e 10.");
      }
    } else if (name === "frequencia") {
      // Permitir valor vazio para frequência
      if (sanitizedValue === "" || validaFrequencia(sanitizedValue)) {
        setNewAluno({ ...newAluno, frequencia: sanitizedValue });
      } else {
        alert("Frequência inválida! A frequência deve ser um número inteiro entre 0 e 100.");
      }
    } else {
      setNewAluno({ ...newAluno, [name]: sanitizedValue });
    }
  };


  const addAluno = async () => {
    if (newAluno.notas.some((nota) => !validaNota(nota))) {
      alert("Todas as notas devem ser números inteiros entre 0 e 10.");
      return;
    }

    if (!validaFrequencia(newAluno.frequencia)) {
      alert("A frequência deve ser um número inteiro entre 0 e 100.");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:5000/adicionar_nota", {
        aluno_nome: newAluno.nome,
        nota: newAluno.notas.map((nota) => parseInt(nota, 10)),
        frequencia: parseInt(newAluno.frequencia, 10),
      });

      setAluno([
        ...aluno,
        {
          nome: newAluno.nome,
          notas: newAluno.notas.map((nota) => parseInt(nota, 10)),
          frequencia: parseInt(newAluno.frequencia, 10),
        },
      ]);

      setNewAluno({ nome: "", notas: ["", "", "", "", ""], frequencia: "" });
    } catch (error) {
      console.error("Erro ao salvar aluno:", error);
      alert("Erro ao salvar aluno no banco de dados.");
    }
  };

  return (
    <FormContainer>
      <h2>Registro</h2>
      <Input
        type="text"
        name="nome"
        value={newAluno.nome}
        onChange={handleInputChange}
        placeholder="Nome do Aluno"
      />
      <NotaContainer>
        {newAluno.notas.map((grade, index) => (
          <Input
            key={index}
            type="text"
            name="notas"
            value={grade}
            onChange={(e) => handleInputChange(e, index)}
            placeholder={`Nota da Disciplina ${index + 1}`}
            min="0"
            max="10"
            pattern="[0-9]*"
          />
        ))}
      </NotaContainer>
      <Input
        type="text"
        name="frequencia"
        value={newAluno.frequencia}
        onChange={handleInputChange}
        placeholder="Frequência (%)"
        min="0"
        max="100"
        pattern="[0-9]*"
      />
      <Button onClick={addAluno}>Registrar</Button>
    </FormContainer>
  );
};

export default FormRegistro;
