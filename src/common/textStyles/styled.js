import styled, { css } from "styled-components";

export const SmallBoldText = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        ${({ aboutMe }) => aboutMe && css`
            margin: 12px 0 8px;
        `}
    }
`;

export const PrimaryText = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;

    ${({ aboutMe }) => aboutMe && css`
        font-size: 20px;
        letter-spacing: 1px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        ${({ aboutMe }) => aboutMe && css`
            margin: 16px 0 24px;
            font-size: 17px;
            letter-spacing: 0.85px;
        `}
    }
`;