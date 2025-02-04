import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistroPage from "./pages/RegistroPage";
import ResultadosPage from "./pages/ResultadosPage";
import "./App.css";

const App = () => {
  const [aluno, setAluno] = useState([]);

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Registro</Link>
          <Link to="/results">Resultados</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <RegistroPage aluno={aluno} setAluno={setAluno} />}
          />
          <Route
            path="/results"
            render={() => <ResultadosPage aluno={aluno} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
