import styled, { css } from "styled-components";

const tileShadowPrimary = ({ theme }) => theme.colors.tileShadowPrimary;
const tileShadowSecondary = ({ theme }) => theme.colors.tileShadowSecondary;

export const ReposListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const RepoTile = styled.div`
    min-width: 288px;
    height: 322px;
    padding: 56px;
    border-radius: 4px;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-gap: 24px;
    transition: 0.5s;
    border: 6px solid ${({ theme }) => theme.colors.linkButtonBorder};
    background-color: ${({ theme }) => theme.colors.tileBackground};
    box-shadow: 0px 16px 58px 0px ${tileShadowPrimary}, 
                0px -2px 50px 0px ${tileShadowSecondary};

    &:hover {
        border-color: ${({ theme }) => theme.colors.repoTileHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 230px;
        padding: 24px;
        grid-gap: 16px;
    }
`;

export const RepoTitle = styled.h3`
    color: ${({ theme }) => theme.colors.repoTitle};
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: capitalize;
`;

export const RepoLinksWrapper = styled.div`
    display: grid;
    grid-template-areas: 
        "demo demolink"
        "code codelink";
    grid-template-rows: max-content max-content;
    grid-template-columns: max-content max-content;
    align-items: center;
    grid-gap: 8px;
`;

export const RepoLink = styled.a`
    color: ${({ theme }) => theme.colors.primaryBlue};
    text-decoration: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.repoLinkBorder};
    transition: 0.5s;

    &:hover,
    &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.repoLinkBorderHover};
    }

    ${({ disabled }) => disabled && css`
        border-bottom: none;
    `}

    ${({ demoLink }) => demoLink && css`
        grid-area: demolink;
    `}

    ${({ codeLink }) => codeLink && css`
        grid-area: codelink;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;