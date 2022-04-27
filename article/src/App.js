import "./App.css";
import { Articles } from "./components/Articles";
import { ComponentProvider } from "./components/context/ComponentContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <ComponentProvider>
          <Route path="/">
            <Articles />
          </Route>
        </ComponentProvider>
      </Router>
    </div>
  );
}

export default App;
