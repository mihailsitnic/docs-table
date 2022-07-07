import img from "img";

interface Files {
  id: number;
  type: string;
  name: string;
  added: string;
  size?: number;
  icon: string;
  inner?: boolean;
}

export type types = {
  id: number;
  type: string;
  name: string;
  added?: string;
  grow?: number;
  files?: Files[];
  size?: number;
  icon: string;
  inner?: boolean;
};

const data: types[] = [
  {
    id: Math.random(),
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
    size: 1,
    icon: img.iconFile,
  },
  {
    id: Math.random(),
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
    size: 0.7,
    icon: img.iconFile,
  },
  {
    id: Math.random(),
    type: "folder",
    name: "Expenses",
    icon: img.iconFolderPlus,
    size: 3,
    files: [
      {
        id: Math.random(),
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
        size: 1.1,
        icon: img.iconFileText,
        inner: true,
      },
      {
        id: Math.random(),
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
        size: 0.8,
        icon: img.iconFileText,
        inner: true,
      },
    ],
  },
  {
    id: Math.random(),
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
    size: 0.2,
    icon: img.iconFile,
  },
  {
    id: Math.random(),
    type: "folder",
    name: "Misc",
    size: 12,
    icon: img.iconFolderPlus,
    files: [
      {
        id: Math.random(),
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
        icon: img.iconFile,
        inner: true,
      },
      {
        id: Math.random(),
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
        icon: img.iconFile,
        inner: true,
      },
    ],
  },
];

export default data;
