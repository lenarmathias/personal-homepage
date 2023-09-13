import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: disc;
    color: ${({ theme }) => theme.colors.primaryBlue};
    column-count: 3;
    column-gap: 115px;
    gap: 8px;
    line-height: 1.8;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 140%;
    }
`;

export const ListItem = styled.li`
    margin-left: 16px;
`;