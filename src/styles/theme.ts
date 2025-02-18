import { DefaultTheme, DarkTheme } from '@react-navigation/native';
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    secondary: '#9b9b9b',
    text: '#333333',
    border: '#E8E8E8',
  },
};
export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    secondary: '#9b9b9b',
    text: '#333333',
    border: '#E8E8E8',
  },
};


/**
 * export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#FC6A57',
    secondary: '#ccc',
    card: '#282828',
    background: '#121212',
    border: '#333333',
  },
};
 */