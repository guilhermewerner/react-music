import color from "color";

import configureFonts from "react-native-paper/src/styles/fonts";
import { black, white, pinkA100 } from "react-native-paper/src/styles/colors";

const theme = {
    dark: true,
    mode: "adaptive",
    roundness: 4,
    colors: {
        primary: "#ff9800",
        accent: "#00b0ff",
        background: "#121212",
        surface: "#121212",
        error: "#CF6679",
        onBackground: "#FFFFFF",
        onSurface: "#FFFFFF",
        text: white,
        disabled: color(white).alpha(0.38).rgb().string(),
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
    fonts: configureFonts(),
    animation: {
        scale: 1.0,
    },
};

export default theme;
