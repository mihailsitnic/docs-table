type types = {
    id: number;
    title: string;
    width: string;
};

const nav: types[] = [
    {
        id: Math.random(),
        title: "Name",
        width: "80%"
    },
    {
        id: Math.random(),
        title: "Size",
        width: "10%"
    },
    {
        id: Math.random(),
        title: "Date",
        width: "10%"
    },
];

export default nav;
