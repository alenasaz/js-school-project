import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { MainRoutes } from "./routes";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Button type="primary">Страница преподавателя</Button>
          <Button type="primary">Страница студента</Button>
        </div>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
