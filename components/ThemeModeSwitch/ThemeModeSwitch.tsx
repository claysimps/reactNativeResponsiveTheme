import React, {FC} from 'react';
import {Switch} from 'react-native';
import {useSelector} from 'react-redux';

import {getThemeMode} from '../../selectors/getThemeMode';
import {useAppDispatch} from '../../utils/useAppDispatch';
import {ThemeModeEnum, setThemeMode} from '../../state/themeMode.slice';
import {
  StyledSwitchWrapper,
  StyledThemeContainer,
  StyledToggleText,
} from './ThemeModeSwitch.styles';

const {LIGHT, DARK} = ThemeModeEnum;

export const ThemeModeSwitch: FC = () => {
  const {themeMode} = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  return (
    <StyledThemeContainer>
      <StyledSwitchWrapper>
        <StyledToggleText>Dark mode</StyledToggleText>
        <Switch
          value={themeMode === DARK}
          onValueChange={(value) => {
            dispatch(setThemeMode(value ? DARK : LIGHT));
          }}
        />
      </StyledSwitchWrapper>
    </StyledThemeContainer>
  );
};
