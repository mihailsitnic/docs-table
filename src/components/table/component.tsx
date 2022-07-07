import React, { useMemo } from "react";
import Head from "./head";
import Body from "./body";
import data from "./data";
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

const Table: React.FC<any> = (props) => {
    const [search, setSearch] = React.useState("");
    const [sort, setSort] = React.useState({ type: "ask", key: "name" });

    const handleSortClick = (key: string) => {
        if (sort.key === key) {
            setSort({ type: sort.type === "ask" ? "desk" : "ask", key });
        } else {
            setSort({ type: "ask", key });
        }
    };

    const filteredData = useMemo(() => {
        return data.filter((item: any) => {
            return (
                item.name.toLowerCase().includes(search) ||
                item.files?.some((file: any) => {
                    return file.name.toLowerCase().includes(search);
                })
            );
        });
    }, [search]);

    const resultData = useMemo(() => {
        return filteredData.sort((a: any, b: any) => {
            if (sort.key === "date") {
                return sort.type === "ask"
                    ? new Date(a.added).valueOf() - new Date(b.added).valueOf()
                    : new Date(b.added).valueOf() - new Date(a.added).valueOf();
            }

            if (sort.key === "size") {
                return sort.type === "ask" ? a.size - b.size : b.size - a.size;
            }

            if (sort.key === "name") {
                return sort.type === "ask"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }
        });
    }, [filteredData, sort]);

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
