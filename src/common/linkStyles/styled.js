import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../images/icons/message.svg";

const linkButtonShadow = ({ theme }) => theme.colors.blueHoverAndFocus;

export const LinkButton = styled.a`
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: ${({ theme }) => theme.colors.linkButtonBorder};
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    transition: 0.5s;

    &:hover,
    &:active {
        box-shadow: -2px -2px 0px 0px ${linkButtonShadow}, 
                    2px 2px 0px 0px ${linkButtonShadow}, 
                    -2px 2px 0px 0px ${linkButtonShadow}, 
                    2px -2px 0px 0px ${linkButtonShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 138px;
        height: 46px;
        gap: 12px;
    }
`;

export const LinkButtonText = styled.span`
    color: ${({ theme }) => theme.colors.linkButtonText};
    text-align: center;
    font-size: 20.058px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.003px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;

export const StyledMailIcon = styled(MailIcon)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 20px;
    }
`;

export const BigLinkAdress = styled.a`
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 1.6px;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;