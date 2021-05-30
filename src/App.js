import "./App.css";
import { HashRouter  as Router, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/:userId">
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
