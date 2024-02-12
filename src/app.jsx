import TopBarContainer from "./features/TopBarContainer";
import GraphContainer from "./features/GraphContainer";
import SpreadsheetContainer from "./features/SpreadsheetContainer";

export default function App(props) {
  return (
    <>
      <TopBarContainer />
      <GraphContainer />
      <SpreadsheetContainer />
    </>
  );
}
