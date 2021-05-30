import "./App.css";
import { HashRouter as Router, Route, useParams } from "react-router-dom";
import Home from "./mainPage";
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


export default App;
