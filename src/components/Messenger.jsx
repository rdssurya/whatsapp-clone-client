import React from 'react';
import Login from './account/Login';
import { AppBar, Box, Toolbar, styled } from "@mui/material";


const Wrapper = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`;

const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`;

const Messenger = () => {
  return (
    <Wrapper>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <Login />
    </Wrapper>
  );
};

export default Messenger;