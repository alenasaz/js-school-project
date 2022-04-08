import { useState, useEffect } from 'react'
import { Collapse, Button, Space } from 'antd'
import { Urls } from './constants'
import { PanelList } from './PanelList'
import { useStore } from 'effector-react'
import axios from 'axios'
import { get } from '../../api/index'
import {
  $allRepo,
  $repoCount,
  $repoList,
  setAllRepoUnvisibleEvent,
  setAllRepoVisibleEvent,
  setRepoCountEvent,
  setRepoListEvent,
} from 'src/store/repositoriesList'

export const RepositoriesList = (prop: { user: string }) => {
  //TODO: Перенести в эффектор. Сделать связку со store User,
  // Запрос возвращается список указанного количества репозиториев (repositoriesPerPage)
  // по нику gitHub в порядке убывания по дате создания
  const isAllShown = useStore($allRepo)
  const repositoriesPerPage = useStore($repoCount)
  const repositories = useStore($repoList)
  const repositoriesUrl = `${Urls.rootUsersUrl}${prop.user}/repos?per_page=${repositoriesPerPage}&sort=order`

  useEffect(() => {
    get(repositoriesUrl).then((result) => setRepoListEvent(result))
  }, [])

  const handleClick = () => {
    return isAllShown
      ? (setAllRepoUnvisibleEvent(), setRepoCountEvent(10))
      : (setAllRepoVisibleEvent(), setRepoCountEvent(100))
  }

  return (
    <>
      <PanelList repositories={repositories} />

      <Button type="default" onClick={handleClick}>
        {isAllShown ? 'Скрыть ' : 'Показать '}
        весь список репозиториев
      </Button>
    </>
  )
}
