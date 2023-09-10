import styled from "styled-components";

const tileShadowPrimary = ({ theme }) => theme.colors.tileShadowPrimary;
const tileShadowSecondary = ({ theme }) => theme.colors.tileShadowSecondary;

export const SectionContainer = styled.div`
    margin-top: 72px;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px ${tileShadowPrimary},
                0px -2px 50px 0px ${tileShadowSecondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 16px;
    }
`;

export const HeadingWrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 12px;
    }
`;