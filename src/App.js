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
      <h6>Family App by Morkelinho: version 0.2</h6>
    </AppContainer>
  );

  
}

export default App;
