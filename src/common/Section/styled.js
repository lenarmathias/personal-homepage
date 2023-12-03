import styled from "styled-components";

const tileShadowPrimary = ({ theme }) => theme.colors.tileShadowPrimary;
const tileShadowSecondary = ({ theme }) => theme.colors.tileShadowSecondary;

export const SectionContainer = styled.div`
  margin-top: 72px;
  padding: 32px;
  background-color: ${({theme}) => theme.colors.tileBackground};
  border-radius: 4px;
  box-shadow: 0 16px 58px 0 ${tileShadowPrimary},
    0 -2px 50px 0 ${tileShadowSecondary};

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin-top: 50px;
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