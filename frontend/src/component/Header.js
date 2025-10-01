import React, { useState } from 'react';
import { Box, Stack, Typography, Button, IconButton, Menu, MenuItem, Modal, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataState } from '../context/Contextprovider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Header = () => {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const { loggedUser, setLoggedUser } = DataState();

    const [menu, setmenu] = useState(null);
    const open = Boolean(menu);
    const handleClick = (event) => {
        setmenu(event.currentTarget);
    };
    const handleClose = () => {
        setmenu(null);
    };

    const handleOpenProfileModal = () => {
        setOpenModal(true);
    }

    const handleLogout = ()=>{
        setLoggedUser('');
        navigate("/")
    }

    return (
        <>
            <Box padding={1} backgroundColor='#F0F8FF'>
                <Stack direction='row' width='100%' justifyContent='space-between'>
                    <Box padding={2}>
                        <Typography
                            variant="h4"
                            onClick={() => navigate("/")}
                            style={{ cursor: 'pointer' }}
                            fontWeight="bold"
                        >
                            ResumeBuilder
                        </Typography>
                    </Box>
                    <Stack spacing={2} direction='row' alignItems='center'>
                        {
                            loggedUser ?
                                <>
                                    <IconButton onClick={handleClick}>
                                        <AccountCircleIcon sx={{ fontSize: 45 }} />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={menu}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleOpenProfileModal}>Profile</MenuItem>
                                        <MenuItem onClick={() => navigate('/my-account')}>My account</MenuItem>
                                        <MenuItem onClick={ handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>

                                :
                                < >
                                    <Button variant="contained" onClick={() => navigate('/login')}>login</Button>
                                    <Button variant="contained" onClick={() => navigate('/signup')}>signup </Button>
                                </>
                        }
                    </Stack>
                </Stack>
            </Box>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="title"
                aria-describedby="description"
            >
                <Box sx={style}>
                    <Stack spacing={2} justifyContent='center' alignItems='center'>
                        <Avatar>{loggedUser?.userName?.substring(0, 2)}</Avatar>
                        <Typography id="title" variant="h6" component="h2">
                            Name : {loggedUser.userName}
                        </Typography>
                        <Typography id="description" sx={{ mt: 2 }}>
                            Email : {loggedUser.email}
                        </Typography>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default Header