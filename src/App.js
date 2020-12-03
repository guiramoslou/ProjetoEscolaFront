import React from 'react';
import Aluno from './pages/alunos'
import NewAluno from './pages/newAluno'
import UpdateAluno from './pages/updateAluno'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <h2>Projeto Escola</h2>
      <Router>
        <Switch>
          <Route path="/alunos" exact component={Aluno} />
          <Route path="/novo-aluno" exact component={NewAluno} />
          <Route path="/aluno/:alunoId" exact component={UpdateAluno} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
