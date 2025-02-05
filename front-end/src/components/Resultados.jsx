
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ResultsContainer,
  Title,
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
  Highlight,
  DeleteButton,
} from "./styles/Resultados.styles";

const Resultados = () => {
  const [alunos, setAlunos] = useState([]);
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/alunos");
        if (Array.isArray(response.data)) {
          const alunosFormatados = response.data.map((aluno) => ({
            nome: aluno.aluno_nome,
            notas: aluno.nota,
            frequencia: aluno.frequencia,
          }));
          setAlunos(alunosFormatados);
        } else {
          console.error("Formato inesperado de resposta da API:", response.data);
          setAlunos([]);
        }
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
        alert("Erro ao carregar dados dos alunos.");
        setAlunos([]);
      }
    };

    fetchAlunos();
  }, []);

  useEffect(() => {
    if (alunos.length > 0) {
      const calculateResults = () => {
        const alunosAgrupados = {};

        alunos.forEach(({ nome, notas, frequencia }) => {
          if (!notas || !frequencia) return;

          if (!alunosAgrupados[nome]) {
            alunosAgrupados[nome] = {
              nome,
              notas: [],
              frequencia: [],
              totalNotas: Array(5).fill(0),
              count: 0,
            };
          }

          alunosAgrupados[nome].notas.push(notas);
          alunosAgrupados[nome].frequencia.push(frequencia);
          alunosAgrupados[nome].count += 1;

          notas.forEach((nota, index) => {
            alunosAgrupados[nome].totalNotas[index] += nota;
          });
        });

        Object.values(alunosAgrupados).forEach((aluno) => {
          aluno.mediaDisciplinas = aluno.totalNotas.map((soma) => soma / aluno.count);
          aluno.mediaGeral = (
            aluno.totalNotas.reduce((a, b) => a + b, 0) /
            (5 * aluno.count)
          ).toFixed(0);
          aluno.mediaFrequencia = (
            aluno.frequencia.reduce((a, b) => a + b, 0) /
            aluno.count
          ).toFixed(0);
        });

        const alunosDetalhados = Object.values(alunosAgrupados);
        const mediaTurma =
          alunosDetalhados.length > 0
            ? alunosDetalhados.reduce(
                (sum, aluno) => sum + parseFloat(aluno.mediaGeral),
                0
              ) / alunosDetalhados.length
            : 0;

        const mediaTurmaPorDisciplina =
          alunosDetalhados.length > 0
            ? alunosDetalhados[0].mediaDisciplinas.map((_, index) =>
                alunosDetalhados.reduce(
                  (sum, aluno) => sum + aluno.mediaDisciplinas[index],
                  0
                ) / alunosDetalhados.length
              )
            : [];

        const acimaMedia = alunosDetalhados.filter(
          (aluno) => parseFloat(aluno.mediaGeral) > mediaTurma
        );
        const baixaFrequencia = alunosDetalhados.filter(
          (aluno) => parseFloat(aluno.mediaFrequencia) < 75
        );

        return {
          alunosDetalhados,
          acimaMedia,
          baixaFrequencia,
          mediaTurma,
          mediaTurmaPorDisciplina,
        };
      };

      setResultados(calculateResults());
    }
  }, [alunos]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja apagar todos os registros?"
    );
    if (confirmDelete) {
      try {
        await axios.delete("http://127.0.0.1:5000/apagar_registros");
        alert("Todos os registros foram apagados!");
        setAlunos([]);
      } catch (error) {
        console.error("Erro ao apagar registros:", error);
        alert("Erro ao apagar registros.");
      }
    }
  };

  if (alunos.length === 0) {
    return (
      <ResultsContainer>
        <p>Nenhum aluno cadastrado.</p>
      </ResultsContainer>
    );
  }

  if (!resultados) {
    return (
      <ResultsContainer>
        <p>Calculando resultados...</p>
      </ResultsContainer>
    );
  }

  const { alunosDetalhados, acimaMedia, baixaFrequencia, mediaTurma, mediaTurmaPorDisciplina } =
    resultados;

  return (
    <ResultsContainer>
      <Title>Resultados</Title>


      <Card>
        <CardHeader>Médias</CardHeader>
        <CardBody>
          <p>
            <strong>Média da turma em cada disciplina:</strong>{" "}
            {mediaTurmaPorDisciplina.map((m) => m.toFixed(0)).join("  ")}
          </p>
          <p>
            <strong>Média geral da turma:</strong> {mediaTurma.toFixed(0)}
          </p>
        </CardBody>
      </Card>


      <Title>Detalhes dos Alunos</Title>
      {alunosDetalhados.map((aluno, index) => (
        <Card key={index}>
          <CardHeader>{aluno.nome}</CardHeader>
          <CardBody>
            <List>
              {aluno.notas.map((notas, idx) => (
                <ListItem key={idx}>
                  Notas: {notas.join("  ")} | Frequência: {aluno.frequencia[idx]}%
                </ListItem>
              ))}
            </List>
            <p>Médias por disciplina: {aluno.mediaDisciplinas.map((m) => m.toFixed(0)).join(" ")}</p>
            <p>
              <strong>Média Geral:</strong> {aluno.mediaGeral}
            </p>
            <p>
              <strong>Frequência Média:</strong> {aluno.mediaFrequencia}%
            </p>
          </CardBody>
        </Card>
      ))}


      <Title>Alunos com média acima da média da turma:</Title>
      {acimaMedia.length > 0 ? (
        <List>
          {acimaMedia.map((aluno, index) => (
            <ListItem key={index}>
              <Highlight>{aluno.nome}</Highlight>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Nenhum aluno.</p>
      )}


      <Title>Alunos com frequência abaixo de 75%:</Title>
      {baixaFrequencia.length > 0 ? (
        <List>
          {baixaFrequencia.map((aluno, index) => (
            <ListItem key={index}>
              <Highlight>{aluno.nome}</Highlight>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Nenhum aluno.</p>
      )}


      <DeleteButton onClick={handleDelete}>Apagar todos os registros</DeleteButton>
    </ResultsContainer>
  );
};

export default Resultados;
