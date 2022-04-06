import { sample } from 'effector'
import {
  $currentUser,
  $currentUserIsLoading,
  $currentUserName,
  setCurrentUserFx,
  setUserIsLoadingEvent,
  setUserNameEvent,
} from './index'

$currentUserName.on(setUserNameEvent, (_, userName) => userName)
$currentUser.on(setCurrentUserFx.doneData, (_, currentUser) => currentUser)
$currentUserIsLoading
  .on(setUserIsLoadingEvent, (_) => true)
  .on($currentUser, (_) => false)

sample({
  clock: setUserNameEvent,
  source: $currentUserName,
  target: setCurrentUserFx,
})
