import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';

import {CustomThemeProps, light} from '../../constants/Theme';

const StyledThemeContainer = styled.KeyboardAvoidingView<CustomThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
`;

export const ThemeManager: FC = ({children}) => {
  return (
    <ThemeProvider theme={light}>
      <StatusBar barStyle={'light-content'} />
      <StyledThemeContainer>{children}</StyledThemeContainer>
    </ThemeProvider>
  );
};
