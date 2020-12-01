import Aluno from './pages/alunos'
import NewAluno from './pages/newAluno'
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
          <Route path="/alunos" component={Aluno} />
          <Route path="/novo-aluno" component={NewAluno} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
