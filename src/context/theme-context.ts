import * as React from 'react';
import {ColorSchemeName} from 'react-native-appearance';
export default React.createContext({
  theme: '',
  setTheme: (_: ColorSchemeName) => {},
  useSystemTheme: false,
  setUseSystemTheme: (_: boolean) => {},
});
