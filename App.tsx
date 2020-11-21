import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';

import {ThemeManager} from './components/ThemeManager';
import {store} from './state';

const App = () => (
  <Provider store={store}>
    <ThemeManager>
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </ThemeManager>
  </Provider>
);

export default App;
