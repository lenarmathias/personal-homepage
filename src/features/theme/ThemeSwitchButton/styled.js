import styled from "styled-components";
import { ReactComponent as SwitchFrame } from "../../../images/elements/themeSwitchButton/SwitchFrame.svg";

export const ThemeSwitchButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 12px;
    align-items: center;
`;

export const TextSpanWrapper = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const DynamicSwitchFrame = styled(SwitchFrame)`
    path {
        fill: ${({ theme }) => theme.colors.switchFrameFill};
        stroke: ${({ theme }) => theme.colors.switchFrameStroke};
    }
`;