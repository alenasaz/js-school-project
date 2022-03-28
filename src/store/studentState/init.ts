import { $displayDrawer, $userName, setDrawerVisible, setDrawerUnvisible, setIndeterminate } from './index'

$displayDrawer.on(setDrawerVisible, (_) => true)
$displayDrawer.on(setDrawerUnvisible, (_) => false)

