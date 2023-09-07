import styled from "styled-components";

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

    &:hover,
    &:active {
        box-shadow: -2px -2px 0px 0px ${linkButtonShadow}, 
                    2px 2px 0px 0px ${linkButtonShadow}, 
                    -2px 2px 0px 0px ${linkButtonShadow}, 
                    2px -2px 0px 0px ${linkButtonShadow};
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
`;