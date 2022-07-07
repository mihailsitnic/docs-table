type types = {
    id: number;
    title: string;
    width: string;
    key: string;
};

const nav: types[] = [
    {
        id: Math.random(),
        title: "Name",
        key: 'name',
        width: "80%"
    },
    {
        id: Math.random(),
        title: "Size",
        key: 'size',
        width: "10%"
    },
    {
        id: Math.random(),
        title: "Date",
        key: 'date',
        width: "10%"
    },
];

export default nav;
