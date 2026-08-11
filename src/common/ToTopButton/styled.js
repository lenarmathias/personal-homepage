import styled, { css } from "styled-components";
import { GoChevronUp } from "react-icons/go";

export const RoundButtonFrame = styled.button`
  width: 60px;
  height: 60px;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBlue};
    }

    &:hover > * {
      transform: scale(1.4);
    }   
  }

  ${({ $visibility }) => $visibility && css`
    display: none;
  `}
`;

export const ToTopIcon = styled(GoChevronUp)`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.background};
  transition: 0.5s;
`;
