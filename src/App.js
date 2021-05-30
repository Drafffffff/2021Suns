import "./App.css";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/2021SunsGraduationEh/:userId">
            <Home />
          </Route>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  let { userId } = useParams();
  return <h2>{userId}</h2>;
}

export default App;
