import React, { useState } from "react";
import data from "./data";
import { Row, Col, Head, HeadKey } from "../styles";

const HeadComponent: React.FC<{}> = (props: any) => {

  const renderHead = () => {
    const list = data.map((item) => (
      <Col key={item.id} {...props} width={item.width}>
        <HeadKey {...props} active={false}>
          {item.title}
        </HeadKey>
      </Col>
    ));
    return <Row>{list}</Row>;
  };

  return (
    <Head>
      {renderHead()}
    </Head>
  );
};

export default HeadComponent;
