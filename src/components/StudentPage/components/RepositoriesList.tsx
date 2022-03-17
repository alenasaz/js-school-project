import { useState, useEffect } from 'react';
import { Collapse,Button,Space } from 'antd';
import { StudentRepository } from './interfaces';
import { Urls } from './constants';

const { Panel } = Collapse;

export const RepositoriesList = (prop: { user: string }) => {
  //TODO: Перенести в эффектор. Сделать связку со store User,
  // Запрос возвращается список указанного количества репозиториев (repositoriesPerPage)
  // по нику gitHub в порядке убывания по дате создания
  const [allRepoShown, setAllRepoShown, ] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);
  const repositoriesUrl = `${Urls.rootUsersUrl}${prop.user}/repos?per_page=${repositoriesPerPage}&sort=order`;

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

  const panelList = repositories.map((item: StudentRepository) => {
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