import { $allRepo, $repoCount, $repoList,setAllRepoVisibleEvent, setAllRepoUnvisibleEvent, setRepoCountEvent, setRepoListEvent} from './index'

$allRepo.on(setAllRepoVisibleEvent, (_) => true).on(setAllRepoUnvisibleEvent, (_) => false)
$repoCount.on(setRepoCountEvent, (_, num)=> num)
$repoList.on(setRepoListEvent, (_, list)=> list)

$repoCount.watch(num => {
    console.log('counter is now', num)
  })
