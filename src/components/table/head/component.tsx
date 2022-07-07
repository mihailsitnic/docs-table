import React, { useState } from "react";
import data from "./data";
import { Row, Col, Head, HeadKey } from "../styles";

interface Props {
    onSortClick: (key: string) => void;
}

const HeadComponent: React.FC<Props> = ({ onSortClick }) => {
    const [id, setID] = useState<number>(0);

    const handleClick = (item: any) => {
        onSortClick(item.key);

        if (item.id === id) {
            return setID(0);
        }
        setID(item.id);
    };

    return (
        <Head>
            <Row>
                {data.map((item) => (
                    <Col
                        key={item.id}
                        width={item.width}
                        onClick={() => handleClick(item)}
                    >
                        <HeadKey active={item.id === id}>{item.title}</HeadKey>
                    </Col>
                ))}
            </Row>
        </Head>
    );
};

export default HeadComponent;
