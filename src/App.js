import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import BrowsePage from "./pages/BrowsePage";
import PickByIdPage from "./pages/PickByIdPage";
import styled from "styled-components";


const AppRoutes = () => (
    <Switch>
        <Route path="/pick-a-character" >
            <PickByIdPage />
        </Route>
        <Route path="/">
            <BrowsePage />
        </Route>
    </Switch>
)
function App() {

  return (
        <AppStyle>
            <Router>
                <Header/>
                <AppRoutes/>
            </Router>
        </AppStyle>
  );
}

const AppStyle = styled.div`
  font-family: sans-serif !important;
  text-align: center;
  margin: 20em 20em;
  font-style: normal;
  font-weight: bold;
  background: #ffffff;
`

export default App;
