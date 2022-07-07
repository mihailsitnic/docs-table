import React from "react";
import { ListRow } from './list-row'
import { ListFolderRow } from './list-folder-row';
import { Body, List } from "../styles";

const BodyComponent: React.FC<any> = (props) => {
    return (
        <Body>
            <List>
                {props.data.map((item: any) => item.type === 'folder' ? (
                    <ListFolderRow key={item.id} {...item} />
                ) : (
                    <ListRow key={item.id} {...item} />
                ))}
            </List>
        </Body>
    );
};

export default BodyComponent;
