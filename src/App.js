import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message'
import { Loading } from './components'
import Router from './Routes';
import store from './redux/store';

const MainApp = () => {
  const globalState = useSelector(state => state.globalReducer)
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
            {globalState.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
