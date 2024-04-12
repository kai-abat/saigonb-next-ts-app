import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Image as ImageUI,
  Input,
  image,
} from "@nextui-org/react";
import Image from "next/image";
import { Key, useCallback } from "react";

const rows = [
  {
    key: "1",
    preview: "/images/menu-001.jpg",
    filename: "test-filename.png",
    sort: "1",
  },
  {
    key: "2",
    preview: "/images/menu-001.jpg",
    filename: "test-sec-filename.png",
    sort: "2",
  },
];

const columns = [
  { name: "PREVIEW", uid: "preview" },
  { name: "FILENAME", uid: "filename" },
  { name: "SORT", uid: "sort" },
  { name: "ACTIONS", uid: "actions" },
];

type ImageData = (typeof rows)[0];

const MenuUploadImageTable = ({ menu }: { menu: string }) => {
  const renderCell = useCallback(
    (imageData: ImageData, columnKey: Key) => {
      const cellValue = imageData[columnKey as keyof ImageData];

      switch (columnKey) {
        case "preview":
          return (
            <ImageUI
              as={Image}
              src={imageData.preview}
              alt="The image selected by the user."
              width={100}
              height={100}
              className="aspect-square object-cover object-center"
              radius="none"
            />
          );
        case "filename":
          return <Input defaultValue={`${menu}_${imageData.key}`} />;
        case "sort":
          return <Input defaultValue={imageData.sort} />;
        default:
          return cellValue;
      }
    },
    [menu]
  );
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default MenuUploadImageTable;
