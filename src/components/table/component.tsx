import React from "react";
import Head from "./head";
import Body from "./body";
import img from "img";
import {
  Section,
  Header,
  Title,
  Num,
  SearchWrap,
  SearchInput,
  SearchIcon,
  Footer,
} from "./styles";

const Table: React.FC<{}> = (props: any) => {

  return (
    <Section>
      <Header>
        <Title>Files / Folders <Num>5</Num></Title>
        <SearchWrap>
          <SearchIcon src={img.iconSearch} />
          <SearchInput />
        </SearchWrap>
      </Header>

      <Head />
      <Body />


      <Footer></Footer>
    </Section>
  );
};

export default Table;
