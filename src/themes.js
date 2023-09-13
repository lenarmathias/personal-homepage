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
        repoTitle: "#0366D6",
        repoTileHover: "#0366D633",
        repoLinkBorder: "rgba(3, 102, 214, 0.2)",
        repoLinkBorderHover: "rgba(3, 102, 214, 0.8)",
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
        repoTitle: "#FFFFFF",
        repoTileHover: "#0366D680",
        repoLinkBorder: "rgba(33, 136, 255, 0.4)",
        repoLinkBorderHover: "rgba(33, 136, 255, 0.8)",
        ...lightMode,
    },

    breakpoints,
};