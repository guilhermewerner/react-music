import color from "color";

import configureFonts from "react-native-paper/src/styles/fonts";
import { black, white, pinkA100, pinkA400 } from "react-native-paper/src/styles/colors";

const light = {
    dark: false,
    roundness: 4,
    colors: {
        primary: "#ff9800",
        accent: "#00b0ff",
        background: "#f6f6f6",
        surface: white,
        error: "#B00020",
        text: black,
        onBackground: "#000000",
        onSurface: "#000000",
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

const dark = {
    ...light,
    dark: true,
    mode: "exact",
    colors: {
        ...light.colors,
        //primary: "#BB86FC",
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
};

export default dark;
