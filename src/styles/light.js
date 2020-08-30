import color from 'color';

import { black, white, pinkA400 } from 'react-native-paper/src/styles/colors';
import configureFonts from 'react-native-paper/src/styles/fonts';

const theme = {
    dark: false,
    roundness: 4,
    colors: {
        primary: '#ff9800',
        accent: '#00b0ff',
        background: '#f6f6f6',
        surface: white,
        error: '#B00020',
        text: black,
        onBackground: '#000000',
        onSurface: '#000000',
        disabled: color(black)
            .alpha(0.26)
            .rgb()
            .string(),
        placeholder: color(black)
            .alpha(0.54)
            .rgb()
            .string(),
        backdrop: color(black)
            .alpha(0.5)
            .rgb()
            .string(),
        notification: pinkA400,
    },
    fonts: configureFonts(),
    animation: {
        scale: 1.0,
    },
};

export default theme;
