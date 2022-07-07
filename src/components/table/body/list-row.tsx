import React from "react";
import { A, Arrow, Cell, Col, Icon, Li, Row } from "../styles";

export const ListRow: React.FC<any> = ({
    size,
    added,
    icon,
    name,
    files,
    onClick,
    isOpen,
    inner = false,
}: any) => {
    return (
        <>
            <Li onClick={onClick}>
                <Row inner={inner}>
                    <Col width="80%">
                        <Cell>
                            <A to="/">
                                <Arrow show={files} active={isOpen} /> <Icon src={icon} />
                                {name}
                            </A>
                        </Cell>
                    </Col>
                    <Col width="10%">
                        <Cell>{size} mb</Cell>
                    </Col>
                    <Col width="10%">
                        <Cell>{added}</Cell>
                    </Col>
                </Row>
            </Li>
        </>
    );
};
