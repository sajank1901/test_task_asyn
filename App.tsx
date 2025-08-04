/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import store from './App/ViewModels/store';
import MainScreen from './App/Screens/MainScreen';
import { Text } from 'react-native';

function App() {
  // return <Text>2345t</Text>;
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
