import React from "react";
import Table from "components/table";
import { Section, Wrapper } from "./styles";

const Home: React.FC<{}> = () => {
  return (
    <Section>
      <Wrapper>
        <Table />
      </Wrapper>
    </Section>
  );
};

export default Home;
