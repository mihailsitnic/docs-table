import styled, { keyframes } from "styled-components";
import colors from "theme/colors";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.span`
  display: block;

  &:after {
    content: "";
    display: block;
    margin: 2em auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${colors.black};
    border-color: ${colors.black} transparent ${colors.black} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
