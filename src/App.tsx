
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Scan from './scan';

function App(): JSX.Element {
  return (
    <Scan />
  );
}


export default App;
