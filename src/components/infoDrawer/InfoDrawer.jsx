import React from 'react';
import { Box, Drawer, Typography, styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: "none"
};

const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #ffffff;
    display: flex;
    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`;

const Component = styled(Box)`
    height: 85%;
    background: #ededed;
`;

const InfoDrawer = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    }
  return (
    <Drawer
        open = {open}
        onClose = {handleClose}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex: 2000}}
    >  
    <Header>
        <ArrowBack onClick = {() => setOpen(false)}/>
        <Typography>Profile</Typography>
    </Header>
    <Component>
        <Profile />
    </Component>

    </Drawer>
  );
};

export default InfoDrawer;