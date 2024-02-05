import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { GoogleLogin } from "@react-oauth/google";
import React from 'react';
import { qrCodeImage } from '../../assets/data';
import {jwtDecode} from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    padding: 56px 0px 56px 56px; 
`;

const QrCode = styled("img")({
    height: 264,
    width: 264,
    margin: '50px 0px 0px 50px',    
});

const Title = styled(Typography)`
    font-size: 20px;
    color: #525242;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`;

const StyledList = styled(List)`
    $ > li {
        padding: 0px;
        margin-top: 15px;
        font-size: 18px;
        line-height: 20px;
        color: #4a4a4a; 
    }
`;

const dialogStyle = {
    height: "95%",
    maxHeight: "100%",
    width: "60%",
    maxWidth: "100%",
    marginTop: "12%",
    boxShadow: "none",
    overflow: "hidden",
};

const Login = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
    };
    const onLoginError = (res) => {
        console.log(res);
    };
  return (
    <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer:</Title>
                <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap Menu settings and select WhatsApp Web</ListItem>
                    <ListItem>3. Point your phone to this screen and capture the code</ListItem>
                </StyledList>
            </Container>
            <Box style={{position: "relative"}}>
                <QrCode src={qrCodeImage} alt="qr-code"/>
                <Box style={{position:'absolute', top: '50%', transform: 'translateX(50%)'}}>
                    <GoogleLogin 
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  );
};

export default Login;