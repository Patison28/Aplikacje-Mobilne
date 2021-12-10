import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import Form from '../../../scenes/form'
import Login from '../../../scenes/login/Login'

import ScannerQR from '../../../scenes/scannerQR/ScannerQR'
import Kontakt from '../../../scenes/kontakt/Kontakt'
import Searcher from '../../../scenes/searcher/Searcher'
import Tasks from '../../../scenes/tasks/Tasks'
import Profile from '../../../scenes/profile/Profile'



const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Login')
  newState.routes = newState.routes.filter((item) => item.name !== 'Login')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home2" component={TabNavigator} />
    <Drawer.Screen name="Registration" component={Form} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="QR" component={ScannerQR} />
    <Drawer.Screen name="Kontakt" component={Kontakt} />
    <Drawer.Screen name="Wyszukaj" component={Searcher} />
    <Drawer.Screen name="ToDo List" component={Tasks} />
    <Drawer.Screen name="Prifile" component={Profile} />




  </Drawer.Navigator>
)

export default DrawerNavigator
