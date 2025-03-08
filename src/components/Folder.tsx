import { type ReactNode } from "react";
import type { FolderItemProps } from "./Tree";
import FolderSvg from "../assets/folder.svg";

export const Folder = ({
  data,
  children,
}: {
  data: FolderItemProps;
  children: ReactNode;
}) => {
  return (
    <div>
      <div className="df-center">
        <img src={FolderSvg} className="itemIcon" /> <span>{data.name}</span>
      </div>
      {children}
    </div>
  );
};
