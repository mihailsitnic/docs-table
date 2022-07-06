import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  position: relative;
  box-shadow: rgb(50 50 50 / 10%) 0px 1px 4px 0px;

  & .rdt_TableHeader {
    border-radius: 4px 4px 0 0;
  }

  & .rdt_Pagination {
    border-radius: 0 0 4px 4px;
  }

  & .rdt_TableCol span {
    display: none;
  }

  & .rdt_TableHeadRow {
    background: ${colors.blue};
    min-height: 30px;
    font-weight: bold;
    color: ${colors.white};
  }

  & .rdt_TableRow {
    min-height: 40px;
  }

  & .rdt_TableHeader {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    z-index: 10;
    min-height: 70px;
  }

  & .rdt_TableHeader + header {
    border-radius: 4px 4px 0 0;
    min-height: 70px;
  }

  @media ${device.mobileL} {
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 36px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${colors.grey};
  padding: 8px 12px 8px 30px;

  @media ${device.mobileL} {
  }
`;

export const Icon = styled.img`
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;

export const Search = styled.div`
  position: relative;

  @media ${device.mobileL} {
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  outline: none;
  cursor: pointer;

  @media ${device.mobileL} {
  }
`;