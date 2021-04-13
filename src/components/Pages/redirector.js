
import styled from "styled-components";
import { ToPages } from "../Pages";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Redirector(props) {
    
    return(
        <AppContainer>
        
            <ToPages />
            
        </AppContainer>
    );
}
