import Header from "./components/header";
import Trending from "./components/trending";
import ZTestComponent from "./components/zTestComponent";
import { StyledApp } from "./styledApp";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Trending />
      {/* <ZTestComponent /> just for test */}
    </StyledApp>
  )
}

export default App;
