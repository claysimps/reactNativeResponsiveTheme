import React from 'react';
import {StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {CustomThemeProps, light, dark} from '../../constants/theme';
import {getThemeMode} from '../../selectors/getThemeMode';
import {ThemeModeEnum} from '../../state/themeMode.slice';

const StyledThemeContainer = styled.KeyboardAvoidingView<CustomThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
`;

const {DARK, LIGHT} = ThemeModeEnum;

export const ThemeManager = ({children}: {children: React.ReactNode}) => {
  const {themeMode} = useSelector(getThemeMode);

  const providedTheme = () => {
    if (themeMode === DARK) {
      return dark;
    }
    if (themeMode === LIGHT) {
      return light;
    }
  };
  return (
    <ThemeProvider theme={providedTheme}>
      <StatusBar
        barStyle={themeMode === DARK ? 'light-content' : 'dark-content'}
      />
      <StyledThemeContainer>{children}</StyledThemeContainer>
    </ThemeProvider>
  );
};
