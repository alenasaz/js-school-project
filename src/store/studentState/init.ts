import { $displayDrawer, setDrawerVisible, setUserName, setDrawerUnvisible } from './index'

$displayDrawer.on(setDrawerVisible, (_) => true)
$displayDrawer.on(setDrawerUnvisible, (_) => false)
//$displayDrawer.on(setUserName, (_,name) => name )
