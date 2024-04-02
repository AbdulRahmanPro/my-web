"use client"
import { Box, Grid, Typography, Container } from "@mui/material";
import Image from "next/image"
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('@/components/menu'), { ssr: false });


export default function about_me() {

    return (
        <>
        <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", minHeight: "80%" }}>
            <Grid container columns={2} spacing={{ xs: 0, sm: 0, md: 4 }} sx={{ bgcolor: "#0b0c0e", backdropFilter: "blur(10px)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", maxWidth: "90%", height: { xs: "100%", sm: "100%", md: "70%" }, borderRadius: "40px", padding: { xs: "auto", sm: "auto", md: "40px" } }}>
                <Grid xs={2} md={1} className=" space-y-1" sx={{ bgcolor: "#000000 ", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backdropFilter: "blur(10px)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}>
                    <Image layout="responsive" style={{ maxWidth: "120px" }} alt='logo' src={'./logo.svg'} width={120} height={100} />
                    <Typography variant="h6">Nedal Daher</Typography>
                    <Box sx={{
                        width: "50%",
                        height: "2px",
                        backgroundColor: "white",
                        border: "none",
                        margin: "20px auto",
                    }} />
                    <Typography variant="subtitle2">Full Stack Web Dev</Typography>


                </Grid>
                <Grid xs={2} md={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bgcolor: "#050505", backdropFilter: "blur(10px)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}>
                    <Box className={"space-y-5"} sx={{maxWidth:{xs:"300px",sm:"300px",md:"400px"}, textAlign:"center"}}>
                        <Typography variant="h3">HELLO !</Typography>
                        <Typography variant="subtitle2">The satisfaction of Allah Almighty is the key to life.</Typography>
                        <Typography variant="subtitle2">Hello 👋, my name is Nadel. I strive to succeed in my life and in my work 💼. I aspire to become a professional software developer 💻, and also to achieve wealth 💰, but not at the expense of my Hereafter.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}