import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../images/icons/githubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedinIcon.svg";

export const FooterContainer = styled.div`
    width: 691px;
    height: 282px;
    margin-top: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 288px;
        height: 236px;
        margin-top: 48px;
    }
`;

export const IconsContainer = styled.div`
    width: 264px;
    height: 48px;
    margin-top: 56px;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 40px;
        grid-gap: 16px;
    }
`;

export const GitHubIconLink = styled(GitHubIcon)`
    width: 48px;
    height: 48px;

    path {
        fill: ${({ theme }) => theme.colors.secondaryTextColor};
        transition: fill 0.5s;
    }

    &:hover {
        path {
            fill: ${({ theme }) => theme.colors.primaryBlue};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const LinkedInIconLink = styled(LinkedInIcon)`
    width: 48px;
    height: 48px;

    path {
        fill: ${({ theme }) => theme.colors.secondaryTextColor};
        transition: fill 0.5s;
    }

    &:hover {
        path {
            fill: ${({ theme }) => theme.colors.primaryBlue};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;