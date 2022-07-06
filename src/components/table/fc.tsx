import img from "img";
import { Input, Search, SearchIcon } from "./styles";

const FilterComponent = ({ filterText, onFilter }: any) => (
    <Search>
        <SearchIcon src={img.iconSearch} />
        <Input
            id="search"
            type="text"
            placeholder="Search"
            value={filterText}
            onChange={onFilter}
        />
    </Search>
);

export default FilterComponent;
