import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Login from 'scenes/login'
import Tasks from 'scenes/tasks'
import Searcher from 'scenes/searcher'
import Kontakt from 'scenes/kontakt'
import Settings from 'scenes/settings/Settings'
import ScannerQR from 'scenes/scannerQR'
import Form from 'scenes/form/Form'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Login"
      component={Login}
    />
    <Stack.Screen
      name="Registration"
      component={Form}
    />
  </Stack.Navigator>
)
export const TasksNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tasks"
    headerMode="screen"
    screenOptions={navigationProps}>
    <Stack.Screen name="Tasks"
                  component={Searcher}
                  options={({ navigation }) => ({
                    title: 'Tasks',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                    headerTitle: () => <HeaderTitle />,
                  })}
    />
  </Stack.Navigator>
)
export const SearcherNavigator = () => (
  <Stack.Navigator
    initialRouteName="Searcher"
    headerMode="screen"
    screenOptions={navigationProps}>
    <Stack.Screen name="Searcher"
                  component={Searcher}
                  options={({ navigation }) => ({
      title: 'Searcher',
      headerLeft: () => <HeaderLeft navigation={navigation} />,
      headerTitle: () => <HeaderTitle />,
    })}
                  />
  </Stack.Navigator>
)
export const KontaktNavigator = () => (
  <Stack.Navigator
    initialRouteName="Kontakt"
    headerMode="screen"
    screenOptions={navigationProps}>
    <Stack.Screen name="Kontakt"
                  component={Kontakt}
                  options={({ navigation }) => ({
                    title: 'Kontakt',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                    headerTitle: () => <HeaderTitle />,
                  })}
    />
  </Stack.Navigator>
)
export const SettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    headerMode="screen"
    screenOptions={navigationProps}>
    <Stack.Screen name="Settings"
                  component={Settings}
                  options={({ navigation }) => ({
                    title: 'Settings',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                    headerTitle: () => <HeaderTitle />,
                  })}
    />
  </Stack.Navigator>
)
export const ScannerQRNavigator = () => (
  <Stack.Navigator
    initialRouteName="ScannerQR"
    headerMode="screen"
    screenOptions={ScannerQR}>
    <Stack.Screen name="ScannerQR"
                  component={ScannerQR}
                  options={({ navigation }) => ({
                    title: 'ScannerQR',
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                    headerTitle: () => <HeaderTitle />,
                  })}
    />
  </Stack.Navigator>
)
