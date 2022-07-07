import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Section = styled.header`
  width: 100%;
  background: ${colors.white};
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 3px 0px;
  z-index: 100;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;

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

export const Inner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
  }
`;

export const Logo = styled.img`
  width: 120px;

  @media ${device.mobileL} {
  }
`;

export const HomeLink = styled(Link)`
  display: inline-flex;

  @media ${device.mobileL} {
  }
`;
