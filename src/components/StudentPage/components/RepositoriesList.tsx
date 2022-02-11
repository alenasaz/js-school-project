import { useState, useEffect } from 'react';
import { Collapse,Button,Space } from 'antd';

type Repository = {
  id: string;
  name?: string;
  full_name?: string;
  html_url?: string;
  description?: string;
  created_at: string;
}

const { Panel } = Collapse;
const rooUsersUrl: string = 'https://api.github.com/users/'

export const RepositoriesList = (prop: { user: string }) => {
  const [allRepoShown, setAllRepoShown, ] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);

  //запрос возвращается список указанного количества репозиториев (repositoriesPerPage)
  // по нику gitHub в порядке убывания по дате создания
  const repositoriesUrl = `${rooUsersUrl}${prop.user}/repos?per_page=${repositoriesPerPage}&sort=order`;

  useEffect(() => {
    fetch(repositoriesUrl)
      .then((data) => data.json())
      .then((result) => {
        setRepositories(result);
      });
  }, [repositoriesUrl]);

  const handleClick = () => {
    return (
      allRepoShown ?
        (setAllRepoShown(false), setRepositoriesPerPage(10))
        :
        (setAllRepoShown(true), setRepositoriesPerPage(100))
    )
  }

  const panelList = repositories.map((item: Repository) => {
    return (
        <Panel header={item?.name} key={`${item.id}`}>
          <p>URL репозитория:</p>
          <p>
            <a href={item.html_url ?? ''}>{item.full_name ?? ''}</a>
          </p>
          <p>Описание: {item.description|| "осутствует"}</p>
          <p>Дата создания: {(item.created_at).slice(0,10).split("-").reverse().join(".")}</p>
        </Panel>
    )
  })

  return (
    <>
      <Collapse defaultActiveKey={[]} >
        {panelList}
      </Collapse>
      <Button type="default" onClick={handleClick}>
        {allRepoShown ? "Скрыть " : "Показать "}
        весь список репозиториев
      </Button>
    </>
  );
}