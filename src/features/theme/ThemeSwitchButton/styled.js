import styled, { css } from "styled-components";
import { ReactComponent as SwitchFrame } from "./svgElements/switchFrame.svg";
import { ReactComponent as SwitchToggle } from "./svgElements/switchToggle.svg";
import { ReactComponent as ThemeIcon } from "./svgElements/themeIcon.svg";

export const ThemeSwitchButtonWrapper = styled.div`
    width: 160px;
    height: 38px;
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 12px;
    align-items: center;
`;

export const TextSpanWrapper = styled.span`
    margin: 0;
    width: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const DynamicSwitchWrapper = styled.div`
    width: 48px;
    height: 26px;
    position: relative;
    display: inline-block;
    cursor: pointer;
`;

export const DynamicSwitchFrame = styled(SwitchFrame)`
    position: absolute;

    path {
        fill: ${({ theme }) => theme.colors.switchFrameFill};
        stroke: ${({ theme }) => theme.colors.switchFrameStroke};
    }
`;

export const DynamicSwitchToggle = styled(SwitchToggle)`
    position: absolute;
    top: 3px;
    left: 3px;

    path {
        fill: ${({ theme }) => theme.colors.switchFrameStroke};
    }

    ${({ togglemove }) => togglemove && css`
        top: 3px;
        left: auto;
        right: 3px;
    `}
`;

export const DynamicThemeIcon = styled(ThemeIcon)`
    position: absolute;
    top: 5.5px;
    left: 5.5px;

    path {
        fill: ${({ theme }) => theme.colors.themeIcon};
    }

    ${({ iconmove }) => iconmove && css`
        top: 5.5px;
        left: auto;
        right: 5.5px;
    `}
`;