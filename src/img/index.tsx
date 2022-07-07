import logo from "./kit/logo.svg";
import iconFile from "./icons/file.svg";
import iconFileText from "./icons/file-text.svg";
import iconFolder from "./icons/folder.svg";
import iconFolderPlus from "./icons/folder-plus.svg";
import iconSearch from "./icons/search.svg";
import iconSortArrow from "./icons/sort-arrow.svg";

export interface Types {
  [key: string]: string;
}

const img: Types = {
  logo,
  iconFile,
  iconFileText,
  iconFolder,
  iconFolderPlus,
  iconSearch,
  iconSortArrow,
};

export default img;
