import { forward, sample } from 'effector'
import {
  $currentUser,
  $currentUserName,
  setCurrentUserEvent,
  setCurrentUserFx,
  setUserNameEvent,
} from './index'

$currentUserName.on(setUserNameEvent, (_, userName) => userName)
$currentUser.on(setCurrentUserFx.doneData, (_, currentUser) => currentUser)

sample({
  clock: setUserNameEvent,
  source: $currentUserName,
  target: setCurrentUserFx,
})
