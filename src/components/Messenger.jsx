import React from 'react';
import Login from './account/Login';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from './context/AccountProvider';
import { AppBar, Box, Toolbar, styled } from "@mui/material";


const Wrapper = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`;

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Wrapper>
      {
        account ? 
        <>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <ChatDialog />
        </>
         :
        <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
        <Login />
        </>
      }
    </Wrapper>
  );
};

export default Messenger;