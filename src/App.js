import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <AccountBox />
      <h6>Designed by Rasta Riri :version 1.0</h6>
    </AppContainer>
  );

  
}

export default App;
