import React from "react";
import Table from "components/table";
import data from "components/table/data";
import { Section, Wrapper, conditionalRowStyles } from "./styles";

const Home: React.FC<{}> = (props: any) => {
  return (
    <Section>
      <Wrapper>
        <Table {...props} data={data} conditionalRowStyles={conditionalRowStyles} />
      </Wrapper>
    </Section>
  )
};

export default Home;
