import styled, { css } from "styled-components";

export const SmallBoldText = styled.p`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
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
`;