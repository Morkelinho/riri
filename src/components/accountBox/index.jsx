import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { OurMenu } from "../Pages/ourMenu";
import Navbar from "../Pages/NavBar";




//main box of the app
const BoxContainer = styled.div`
  width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;3 hg
  background-color: #ffff;
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

const TopContainer2 = styled.div`
  width: 100%;
  height: 100px;
  display: bottom;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.0em;
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
  background: rgb(243,214,129);
    background: linear-gradient(
                85deg, rgba(243,214,129,1) 100%,
                 rgba(244,238,39,1) 100%
                 );
`;

const BackDrop2 = styled(motion.div)`
  width: 100%;
  height: 111px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 14%;
  transform: rotate(60deg);
  Bottom: 460px;
  right: -115px;
  background: rgb(243,214,129);
    background: linear-gradient(
                85deg, rgba(243,214,129,1) 100%,
                 rgba(244,238,39,1) 100%
                 );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FooterContainer = styled.div`
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

const SmallText2 = styled.h3`
  color: maroon;
  font-weight: 500;
  font-size: 30px;
  z-index: 10;
  margin: 0;
  
  text-align:center;
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
const InnerFooter = styled(motion.div)`
  width: 100%;
  height: 340px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 0%;
  
  top: 515px;
  
  
  background: rgb(243,214,129);
    background: linear-gradient(
                85deg, rgba(243,214,129,1) 100%,
                 rgba(244,238,39,1) 100%
                 );
`;

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };
    const switchToMainMenu = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("mainmenu");
        }, 400);
    };


    const contextValue = { switchToSignup, switchToSignin, switchToMainMenu};


    return (

        <AccountContext.Provider value={contextValue}>
         
                    {active === "signin" && (
                        <BoxContainer>
                            <TopContainer>
                                <BackDrop
                                    initial={false}
                                    animate={isExpanded ? "expanded" : "collapsed"}
                                    variants={backdropVariants}
                                    transition={expandingTransition}
                                />
                        <HeaderContainer>
                            <HeaderText>Welcome</HeaderText>
                            <HeaderText>Back</HeaderText>
                            <SmallText>Login to continue....</SmallText>
                        </HeaderContainer>
                        </TopContainer>
                    <InnerContainer>
                        {active === "signin" && <LoginForm />}
                        </InnerContainer>
                        </BoxContainer>
                    )}
        
                    {active === "signup" && (

                <BoxContainer>
                    <TopContainer>
                        <BackDrop
                            initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />
                        <HeaderContainer>
                            <HeaderText>Create</HeaderText>
                            <HeaderText>Account</HeaderText>
                            <SmallText>Register account below....</SmallText>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        {active === "signup" && <SignupForm />}
                    </InnerContainer>
                </BoxContainer>
                    )}
                
            {active === "mainmenu" && (
                <BoxContainer>
                    <TopContainer2>
                        <BackDrop2
                            initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />

                        <HeaderContainer>
                            
                           <HeaderText>

                               
                            <Navbar/>
                            </HeaderText>
                    
                           
                        </HeaderContainer>
                    </TopContainer2>
                    <InnerContainer>
                      
                    </InnerContainer>
                    <InnerFooter> 
                    <FooterContainer>
                        <SmallText2 >+</SmallText2>
                    </FooterContainer>
                    </InnerFooter>
                </BoxContainer>

                
            )}
                
          
        </AccountContext.Provider>
    );
}
