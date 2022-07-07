import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";
import img from "img";

export const Section = styled.div`
  background: ${colors.white};
  width: 100%;
  border-radius: 4px;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 4px 0px;

  @media ${device.mobileL} {
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px;

  @media ${device.mobileL} {
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media ${device.mobileL} {
  }
`;

export const Num = styled.span`
  color: ${colors.grey4};
  font-size: 16px;
  padding-left: 8px;

  @media ${device.mobileL} {
  }
`;

export const SearchWrap = styled.div`
  position: relative;

  @media ${device.mobileL} {
  }
`;

export const SearchInput = styled.input`
  width: 225px;
  height: 36px;
  padding: 8px 12px 8px 34px;
  border-radius: 4px;
  border: 1px solid ${colors.grey5};
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
    border: 2px solid ${colors.grey4};
  }

  @media ${device.mobileL} {
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const Head = styled.div`
  background: ${colors.grey2};
  border-top: 1px solid ${colors.grey3};
  border-bottom: 1px solid ${colors.grey3};
  width: 100%;
  padding: 0 28px;
  height: 32px;
  display: grid;

  @media ${device.mobileL} {
  }
`;

export const HeadKey = styled.span`
  color: ${colors.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    right: -20px;
    width: 16px;
    height: 16px;
    background: url(${img.iconSortArrow});
    transform: rotate(0);
  }

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.active &&
    css`
      &:after {
        transform: rotate(180deg);
      }
    `}
`;

export const Body = styled.div`

  @media ${device.mobileL} {
  }
`;

export const List = styled.ul`
  list-style: none;

  @media ${device.mobileL} {
  }
`;

export const Li = styled.li`
  padding: 0 28px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border: none;
  }

  @media ${device.mobileL} {
  }
`;

export const Row = styled.div`
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
  }

  ${(props: any) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const Cell = styled.span`
  line-height: 3;
  font-size: 14px;
  color: ${colors.black};
  display: flex;

  @media ${device.mobileL} {
  }
`;

export const Footer = styled.footer`
  @media ${device.mobileL} {
  }
`;

export const Arrow = styled.div`
  position: relative;
  display: flex;
  padding-left: 20px;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent ${colors.grey4};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props: any) =>
    props.active &&
    css`
      &:before {
        transform: rotate(90deg);
        top: 40%;
      }
    `}

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  padding-right: 10px;
  @media ${device.mobileL} {
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  display: flex;
  font-size: 14px;
  line-height: 1.43;
  max-width: 100%;
  color: ${colors.black};

  @media ${device.mobileL} {
  }
`;
