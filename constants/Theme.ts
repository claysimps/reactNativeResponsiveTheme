export const dark = {
  background: '#121212',
  text: '#F5AD93',
};

export const light = {
  background: '#ECF0F3',
  text: '#A40000',
};

type Theme = {
  background: typeof dark.background | typeof light.background;
  text: typeof dark.text | typeof light.text;
};

export interface CustomThemeProps {
  theme?: Theme;
}
