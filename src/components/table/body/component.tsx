import React, { useState } from "react";
import data from "./data";
import { Body, List, Li, Row, Col, Cell, Arrow, Icon } from "../styles";

const BodyComponent: React.FC<{}> = (props: any) => {
    const [currentID, setCurrentID] = useState<number>(0);

    const renderBody = () => {
        const list = data.map((item) => (
            <>
                <Li key={item.id} onClick={() => setCurrentID(item.id)}>
                    <Row onClick={() => { }}>
                        <Col {...props} width="80%">
                            <Cell><Arrow {...props} active={false} /> <Icon src={item.icon} /> {item.name}</Cell>
                        </Col>
                        <Col {...props} width="10%">
                            <Cell>{item.size} mb</Cell>
                        </Col>
                        <Col {...props} width="10%">
                            <Cell>{item.added}</Cell>
                        </Col>
                    </Row>
                </Li>
            </>
        ));
        return <List>{list}</List>;
    };
    return <Body>{renderBody()}</Body>;
};

export default BodyComponent;



{/* <Li key={x.id}>
    <Row>
        <Col {...props} width="80%">
            <Cell>{x.name}</Cell>
        </Col>
        <Col {...props} width="10%">
            <Cell>{x.size} mb</Cell>
        </Col>
        <Col {...props} width="10%">
            <Cell>{x.added}</Cell>
        </Col>
    </Row>
</Li> */}