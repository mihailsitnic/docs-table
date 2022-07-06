import { Icon } from "./styles";

const getColumns = (onIconClick: any) => [
    {
        name: "Icon",
        cell: (row: any) => (
            <Icon
                src={row.icon}
                onClick={() => onIconClick(row)}
                alt="icon"
            />
        ),
        grow: 0.5,
    },
    {
        name: "Name",
        selector: (row: any) => row.name,
        sortable: true,
        grow: 5,
    },
    {
        name: "Size",
        selector: (row: any) => row.size,
        sortable: true,
    },
    {
        name: "Date",
        selector: (row: any) => row.added,
        sortable: true,
    },
];

export default getColumns;
