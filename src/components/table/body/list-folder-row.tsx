import React from "react";
import { ListRow } from "./list-row";

export const ListFolderRow: React.FC<any> = (props) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <>
            <ListRow
                {...props}
                onClick={() => setIsOpen((prev) => !prev)}
                isOpen={isOpen}
            />
            {isOpen &&
                !!props.files &&
                props.files.map((el: any) => <ListRow key={el.id} {...el} inner />)}
        </>
    );
};
