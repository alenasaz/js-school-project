import { useLocation } from "react-router-dom";
import { RepositoriesList } from "./components/RepositoriesList/RepositoriesList";

export const StudentPage = () => {
  const location = useLocation();
  const user = location.pathname.split("/")[2];
  return (
    <div>
      StudentPage <RepositoriesList user={user} />
    </div>
  );
};
