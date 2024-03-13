"use client"
import { useState } from "react"
import { Box, Typography, TextField, InputBase, Button, Container, Divider } from "@mui/material"
import { useTheme, ThemeProvider } from '@mui/material/styles';

import InputTheme from "@/themes/InputTheme"
import { LocationOn, LocalPhone, Email, GitHub, Instagram, Facebook, X } from '@mui/icons-material';
import { Grid } from '@mui/material'; // Grid version 2
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import Image from "next/image";
import IconLink from '@/hooks/iconLink'
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('@/components/menu'), { ssr: false });
type TextFieldProps = {
    borderColor?: string;
};
export default function contact() {
    const MotionBox = styled(motion.div)({});
    const myStyles = {
        sx: {
            bgcolor: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "64px",
            maxHeight: "64px",
            height: "64px",
            width: "64px",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }
    };
    const styleSizeIcon = {
        sx: {
            height: "32px",
            width: "32px"
        }
    }
    const anime = {
        scale: 1.4,
        transition: { ease: "easeOut", duration: 0.2 },
    }
    return (
        <>
            <Menu />
            <Box className={" flex flex-row justify-center items-center  "} sx={{ width: "100%", height: "110vh" }}>
                <Grid container columns={{ xs: 2, sm: 2, md: 2 }} spacing={{ xs: 0, sm: 0, md: 4 }} sx={{ width: "70%", maxWidth: "70%", height: { xs: "100%", sm: "100%", md: "70%" }, padding: { xs: "20px", sm: "20px", md: "40px" }, bgcolor: "#0b0c0e", borderRadius: "25px", backdropFilter: 'blur(10px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Grid item xs={2} md={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "start", height: { xs: "50%", sm: "50%", md: "100%" } }}   >
                        <Typography variant="h4" sx={{ fontSize: { xs: "25px", sm: "25px" } }} >Contact us </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", minHeight: "80%" }}>
                            <ThemeProvider theme={InputTheme()}>
                                <TextField label="name" variant="filled" />
                                <TextField label="email" variant="filled" />
                                <TextField label="message" variant="filled" id="outlined-multiline-flexible" multiline minRows={4} maxRows={4} />
                            </ThemeProvider>
                            <Button variant="contained">Send</Button>

                        </Box>
                    </Grid>
                    <Grid item xs={2} md={1} sx={{ height: { xs: "50%", sm: "50%", md: "100%" }, display: "flex", flexDirection: "column", alignItems: { xs: "auto", sm: "auto", md: "center" }, justifyContent: "start", textAlign: "left" }}   >
                        <Typography sx={{ fontSize: { xs: "25px", sm: "25px" } }} variant="h4" >Other contact </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", height: "100%" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "start", minHeight: "90%", height: { xs: "80%", sm: "80%", md: "50%" } }}>
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <LocationOn />
                                    <p className=" text-sm" >Al-Wefaq Street, Al-Rasheed suburb, near My Market</p>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <LocalPhone />
                                    <p className=" text-sm" >+962797514430</p>
                                </Box>
                                <Box sx={{
                                    width: "100%",
                                    height: "1px",
                                    backgroundColor: "#ccc",
                                    border: "none",
                                    margin: "10px 0",
                                }} />
                                <Box sx={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
                                    <MotionBox whileHover={anime}
                                        whileTap={{ scale: 0.9 }} sx={myStyles.sx}>
                                        <IconLink iconComponent={<Image src={"discord.svg"} width={32} height={32} alt="image discord" />} route="https://discord.com/users/993205377049034793" />
                                    </MotionBox>
                                    <MotionBox whileHover={anime} whileTap={{ scale: 0.9 }} sx={myStyles.sx}>
                                        <IconLink iconComponent={<GitHub sx={styleSizeIcon.sx} />} route="https://github.com/MohammedSaifiCoder" />
                                    </MotionBox>
                                    <MotionBox whileHover={anime} whileTap={{ scale: 0.9 }} sx={myStyles.sx}>
                                        <IconLink iconComponent={<Instagram sx={styleSizeIcon.sx} />} route="https://www.instagram.com/s.a.ifi/" />
                                    </MotionBox>
                                    <MotionBox whileHover={anime} whileTap={{ scale: 0.9 }} sx={myStyles.sx}>
                                        <IconLink iconComponent={<Facebook sx={styleSizeIcon.sx} />} route="https://www.facebook.com/mohammed.saifi.39" />
                                    </MotionBox>
                                </Box>
                                <Box sx={{
                                    width: "100%",
                                    height: "1px",
                                    backgroundColor: "#ccc",
                                    border: "none",
                                    margin: "10px 0",
                                }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}