import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled("img")({
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    padding: "25px 0px",
});

const BoxWrapper = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child{
        color: #4a4a4a;
        margin: 14px 0px;
    }
`;  

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p{
        font-size: 13px;
        color: #8696a0;
    }
`;

const Profile = () => {
    const {account} = useContext(AccountContext);

  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt="dp"/>
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DescriptionContainer>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
    </DescriptionContainer>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Your status goes here</Typography>
    </BoxWrapper>
    </>
  );
};

export default Profile;