import React, {FC, useEffect} from 'react';
import {StatusBar, Appearance} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {useSelector} from 'react-redux';

import {CustomThemeProps, light, dark} from '../../constants/Theme';
import {getThemeMode} from '../../selectors/getThemeMode';
import {ThemeModeEnum, setThemeMode} from '../../state/themeMode.slice';
import {useAppDispatch} from '../../utils/useAppDispatch';

const StyledThemeContainer = styled.KeyboardAvoidingView<CustomThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
`;

const {DARK, LIGHT} = ThemeModeEnum;

export const ThemeManager: FC = ({children}) => {
  const {themeMode} = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  const providedTheme = () => {
    if (themeMode === DARK) {
      return dark;
    }
    if (themeMode === LIGHT) {
      return light;
    }
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch(setThemeMode(colorScheme as ThemeModeEnum));
    });
    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={providedTheme}>
      <StatusBar
        barStyle={themeMode === DARK ? 'light-content' : 'dark-content'}
      />
      <StyledThemeContainer>{children}</StyledThemeContainer>
    </ThemeProvider>
  );
};
