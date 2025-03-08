import { type ReactNode } from "react";
import FileSvg from "../assets/file.svg";
import { type FolderItemProps } from "./Tree";

export const File = ({
  data,
  children,
}: {
  data: FolderItemProps;
  children?: ReactNode;
}) => {
  return (
    <div className="df-center">
      <img src={FileSvg} className="itemIcon" /> <span>{data.name}</span>
      {children}
    </div>
  );
};
