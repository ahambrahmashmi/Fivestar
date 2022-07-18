import React from 'react';
import NavigateScreen from './src/routes/navigateScreen';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigateScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
