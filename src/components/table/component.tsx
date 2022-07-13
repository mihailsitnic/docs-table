import React, { useMemo } from "react";
import { filterData, sortData } from 'components/reusable/utils';
import Head from "./head";
import Body from "./body";
import data from "../reusable/utils/data";
import img from "img";
import {
    Section,
    Header,
    Title,
    Num,
    SearchWrap,
    SearchInput,
    SearchIcon,
} from "./styles";

const Table: React.FC<any> = () => {
    const [search, setSearch] = React.useState("");
    const [sort, setSort] = React.useState({ type: "ask", key: "name" });

    const handleSortClick = (key: string) => {
        if (sort.key === key) {
            setSort({ type: sort.type === "ask" ? "desk" : "ask", key });
        } else {
            setSort({ type: "ask", key });
        }
    };

    const filteredData = useMemo(() => filterData(data, search), [search]);

    const resultData = useMemo(() => sortData(filteredData, sort), [filteredData, sort]);

    return (
        <Section>
            <Header>
                <Title>
                    Files / Folders <Num>{filteredData.length}</Num>
                </Title>
                <SearchWrap>
                    <SearchIcon src={img.iconSearch} />
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </SearchWrap>
            </Header>

            <Head onSortClick={handleSortClick} />
            <Body data={resultData} />
        </Section>
    );
};

export default Table;
