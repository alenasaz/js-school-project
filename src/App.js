import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkButton } from "./components/LinkButton/LinkButton";

import { MainRoutes } from "./routes";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <LinkButton link="TeacherPage">Cтраница преподавателя</LinkButton>
          <LinkButton link="StudentPage/dpolevodin">
            Cтраница студента
          </LinkButton>
          <LinkButton link="">Домашняя страница</LinkButton>
        </div>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
