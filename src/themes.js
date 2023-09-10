import { breakpoints } from "./breakpoints";

export const lightMode = {
    colors: {
        background: "#FBFBFE",
        primaryTextColor: "#6E7E91",
        secondaryTextColor: "#252525",
        linkButtonBorder: "#D1D5DA4D",
        linkButtonText: "#FFFFFF",
        primaryBlue: "#0366D6",
        blueHoverAndFocus: "#8CC2FF",
        switchFrameFill: "#E5E5E5",
        switchFrameStroke: "#6E7E91",
        themeIcon: "#FFFFFF",
        tileBackground: "#FFFFFF",
        tileShadowPrimary: "#090a3308",
        tileShadowSecondary: "#090a3305",
        divider: "#D1D5DA4D",
    },

    breakpoints,
};

export const darkMode = {
    colors: {
        background: "#252525",
        primaryTextColor: "#FFFFFF",
        secondaryTextColor: "#FFFFFF",
        linkButtonBorder: "#D1D5DA1A",
        linkButtonText: "#FFFFFF",
        primaryBlue: "#2188FF",
        blueHoverAndFocus: "#6D93BE",
        switchFrameFill: "#363636",
        switchFrameStroke: "#FFFFFF",
        themeIcon: "#252525",
        tileBackground: "#363636B8",
        divider: "#E5E5E5",
        ...lightMode,
    },

    breakpoints,
};