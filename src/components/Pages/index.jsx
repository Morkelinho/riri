import React, { useState } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { AccountContext } from "../Pages/accountContext";


//main box of the app
const BoxContainer = styled.div`
  width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;3 hg
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
//Holdthe header 
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 110px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(243,2,129);
    background: linear-gradient(
                85deg, rgba(243,2,129,1) 100%,
                 rgba(244,2,39,1) 100%
                 );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: Black;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function ToPages(props) {

  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("mainmenu");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1300 - 2000);
  };

  const switchToMainMenu = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("mainmenu");
    }, 1000);
  };

  const contextValue = { switchToMainMenu };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
    
            <HeaderContainer>
              <HeaderText>Menu Face</HeaderText>
            </HeaderContainer>

        </TopContainer>
        <InnerContainer>
          
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
