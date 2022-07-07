import { View, Text } from 'react-native'
import React from 'react'
import NavigateScreen from './src/routes/navigateScreen'
import store from './src/redux/store'
import { Provider } from 'react-redux'


const App = (props:any) => {
  return (
    <Provider store={store}>
    <NavigateScreen />
    </Provider>
  )
}

export default App