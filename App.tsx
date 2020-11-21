import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {ThemeManager} from './components/ThemeManager';
import {store} from './state';
import {ThemeModeSwitch} from './components/ThemeModeSwitch';

const App = () => (
  <Provider store={store}>
    <ThemeManager>
      <SafeAreaView>
        <ThemeModeSwitch />
      </SafeAreaView>
    </ThemeManager>
  </Provider>
);

export default App;
