import { useState, useEffect } from 'react'
import { Collapse, Button, Space } from 'antd'
import { Urls } from './constants'
import { PanelList } from './PanelList'
import { useStore } from 'effector-react'
import { get } from '../../api/'
import {
  $allRepo,
  $repoCount,
  $repoList,
  setAllRepoUnvisibleEvent,
  setAllRepoVisibleEvent,
  setRepoCountEvent,
  setRepoListEvent,
} from '../../store/repositoriesList'

export const RepositoriesList = (prop: { user: string }) => {
  const isAllShown = useStore($allRepo)
  const repositoriesPerPage = useStore($repoCount)
  const repositories = useStore($repoList)
  const repositoriesUrl = `${Urls.rootUsersUrl}${prop.user}/repos?per_page=${repositoriesPerPage}&sort=order`

  useEffect(() => {
    get(repositoriesUrl).then((result) => setRepoListEvent(result))
  }, [repositoriesUrl])

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
