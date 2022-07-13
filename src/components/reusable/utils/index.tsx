export const filterData = (data: any[], search: string) => {
    return data.filter((item) => {
        return (
            item.name.toLowerCase().includes(search) ||
            item.files?.some((file: any) => {
                return file.name.toLowerCase().includes(search);
            })
        );
    });
};

export const sortData = (data: any[], sort: { key: string; type: string }) => {
    return [...data].sort((a: any, b: any) => {
        if (sort.key === "date") {
            return sort.type === "ask"
                ? new Date(a.added).valueOf() - new Date(b.added).valueOf()
                : new Date(b.added).valueOf() - new Date(a.added).valueOf();
        }

        if (sort.key === "size") {
            return sort.type === "ask" ? a.size - b.size : b.size - a.size;
        }

        if (sort.key === "name") {
            // debugger;
            return sort.type === "ask"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }
    });
};
