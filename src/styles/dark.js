import color from 'color';

import { black, white, pinkA100 } from 'react-native-paper/src/styles/colors';
import { Theme } from 'react-native-paper/src/types';

import LightTheme from './light';

const theme = {
    ...LightTheme,
    dark: true,
    mode: 'exact',
    colors: {
        ...LightTheme.colors,
        //primary: '#BB86FC',
        accent: '#00b0ff',
        background: '#121212',
        surface: '#121212',
        error: '#CF6679',
        onBackground: '#FFFFFF',
        onSurface: '#FFFFFF',
        text: white,
        disabled: color(white)
            .alpha(0.38)
            .rgb()
            .string(),
        placeholder: color(white)
            .alpha(0.54)
            .rgb()
            .string(),
        backdrop: color(black)
            .alpha(0.5)
            .rgb()
            .string(),
        notification: pinkA100,
    },
};

export default theme;
