import styled, { css } from "styled-components";

export const HeadingText = styled.h2`
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    margin: 0 0 15px;
    font-size: 30px;
    font-weight: 900;
    font-style: normal;
    letter-spacing: 1.5px;

    ${({ portfolioHeading }) => portfolioHeading && css`
        margin-bottom: 8px;
    `}
`;

export const MainHeadingText = styled(HeadingText)`
    margin-top: 12px;
    margin-bottom: 35px;
    font-size: 38px;
    letter-spacing: 1.9px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 16px;
        font-size: 22px;
        letter-spacing: 1.1px;
    }
`;

export const SmallBoldText = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 130%;

    ${({ footer }) => footer && css`
        margin: 0 0 24px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        ${({ aboutMe }) => aboutMe && css`
            margin: 12px 0 8px;
        `}

        ${({ footer }) => footer && css`
            margin: 0 0 12px;
        `}
    }
`;

export const PrimaryText = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 1px;

    ${({ portfolio }) => portfolio && css`
        color: ${({ theme }) => theme.colors.secondaryTextColor};
    `}

    ${({ smaller }) => smaller && css`
        font-size: 18px;
        letter-spacing: 0.9px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        ${({ aboutMe }) => aboutMe && css`
            margin: 16px 0 24px;
            font-size: 17px;
            letter-spacing: 0.85px;
        `}
    }
`;

export const ListText = styled.span`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;

    ${({ footer }) => footer && css`
        color: ${({ theme }) => theme.colors.secondaryTextColor};
        margin-top: 24px;
    `}

    ${({ demo }) => demo && css`
        grid-area: demo;
    `}

    ${({ code }) => code && css`
        grid-area: code;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.7px;

        ${({ footer }) => footer && css`
            margin-top: 12px;
        `}
    }
`;