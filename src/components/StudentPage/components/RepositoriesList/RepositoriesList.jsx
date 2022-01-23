import style from "./RepositoriesList.module.css";
import { useState, useEffect } from "react";
import { RepositoriesItem } from "../RepositoriesItem/RepositoriesItem";

export const RepositoriesList = ({ user }) => {
  const [repoList, setRepoList] = useState([]);

  const repoUrl = `https://api.github.com/users/${user}/repos?per_page=100`;

  useEffect(() => {
    fetch(repoUrl)
      .then((data) => data.json())
      .then((result) => {
        setRepoList(result);
      });
  }, [repoUrl]);

  const renderRepoList = repoList.map((item) => (
    <RepositoriesItem key={item.id} {...item} user={user} />
  ));
  return <div className={style._}>{renderRepoList}</div>;
};
