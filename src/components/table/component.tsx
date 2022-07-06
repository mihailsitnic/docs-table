import { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./fc";
import getColumns from "./columns";
import { types } from "./data";
import { Wrap } from "./styles";

const Table: React.FC<{}> = (props: any) => {
  const { data } = props;

  const [filterText, setFilterText] = useState<string>("");
  const [resetPagination, setResetPagination] = useState<boolean>(false);
  const [openFolderIds, setOpenFolderIds] = useState<number[]>([]);
  // const [sortDate, setSortDate] = useState<types[]>(data);

  console.log("openFolderIds ===> ", openFolderIds)


  const handleSort = (...args: any) => {
    setOpenFolderIds([]);

    // setSortDate(args[2].filter((item: any) => !item.inner) as types[])
  }

  const handleButtonClick = (row: any) => {
    if (row.type === "folder") {
      setOpenFolderIds(prev => prev.includes(row.id) ? prev.filter(el => el !== row.id) : [...prev, row.id])
    }
  }

  const getData = () => {
    const result = [];

    for (const index in data) {
      const item = data[index];
      result.push(item);
      const isOpen = item.type === "folder" && openFolderIds.includes(item.id)

      if (isOpen && item.files) {
        result.push(...item.files)
      }
    }

    return result;
  }

  // const test = data.reduce((acc, current, index) => {
  //   return acc
  // },[])


  const filteredItems = getData().filter(
    (item: any) =>
      JSON.stringify(item)
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  console.log("filteredItems ===> ", filteredItems)

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPagination(!resetPagination);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e: any) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPagination]);

  return (
    <Wrap>
      <DataTable
        {...props}
        title="Files and Folders"
        columns={getColumns(handleButtonClick)}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
        onSort={handleSort}
        onRowClicked={handleButtonClick}
      />
    </Wrap>
  );
};

export default Table;


// (...args) => setSortDate(args[2] as types[])