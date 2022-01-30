import Header from "./components/header";
import Recommanded from "./components/recommanded";
import Trending from "./components/trending";
import { StyledApp } from "./styledApp";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Trending />
      <Recommanded />
    </StyledApp>
  )
}

export default App;
