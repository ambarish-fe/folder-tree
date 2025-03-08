import { Folder } from "./Folder";
import { File } from "./File";

export type FolderItemProps = {
  name: string;
  type: "file" | "folder";
  size?: string;
  children: FolderItemProps[];
};
export const Tree = ({ data }: { data: FolderItemProps[] }) => {
  return data.map((d1) => {
    if (d1.children)
      return (
        <div>
          <Folder data={d1}>
            <div className="m10 border">
              <Tree data={d1.children} />
            </div>
          </Folder>
        </div>
      );
    else {
      return <File data={d1} />;
    }
  });
};
