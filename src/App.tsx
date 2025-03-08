import "./App.css";
import { type FolderItemProps, Tree } from "./components/Tree";
import data from "./components/data.json";

function App() {
  return (
    <>
      <h1>Folder tree component</h1>
      <Tree data={data as FolderItemProps[]} />
    </>
  );
}

export default App;
