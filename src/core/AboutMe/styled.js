import styled from "styled-components";

export const AboutMeWrapper = styled.header`
    height: 384px;
    display: flex;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-wrap: wrap;
    }
`;

export const ProfilePicture = styled.div`
    background-image: url("https://avatars.githubusercontent.com/u/127316325?v=4");
    width: 398px;
    height: 398px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 130px;
        height: 130px;
    }
`;

export const AboutMeTextWrapper = styled.div`
    width: 633px;
    margin-left: 66px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-left: 0;
    }
`;