import { $displayDrawer, $userName, setDrawerVisibleEvent, setDrawerUnvisibleEvent } from './index'

$displayDrawer.on(setDrawerVisibleEvent, (_) => true).on(setDrawerUnvisibleEvent, (_) => false)

