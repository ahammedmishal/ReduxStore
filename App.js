import React from 'react';
import {StyleSheet } from 'react-native';
import StackNavigator from './src/Navigators';
import { Provider as StoreProvider } from 'react-redux'
import store from './reducers/store';


const App = () => {
  return (
    <StoreProvider store={store}>
      <StackNavigator />
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  }
});

export default App;