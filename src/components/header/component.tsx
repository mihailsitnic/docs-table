import React from "react";
import img from "img";
import { Section, Wrapper, Inner, HomeLink, Logo } from "./styles";

const Header: React.FC<{}> = () => {
  return (
    <Section>
      <Wrapper>
        <Inner>
          <HomeLink to="/">
            <Logo src={img.logo} />
          </HomeLink>
        </Inner>
      </Wrapper>
    </Section>
  );
};

export default Header;