import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Section = styled.section`
  margin-top: 60px;
  padding-top: 30px;

  @media ${device.mobileL} {
  }
`;

export const Wrapper = styled.div`
  width: 1170px;
  max-width: 90%;
  margin: 0px auto;

  @media ${device.mobileL} {
  }
`;