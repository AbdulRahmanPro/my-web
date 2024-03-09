import React, { ReactNode } from "react"; // استيراد ReactNode بشكل صحيح
import { Box,BoxProps  } from '@mui/material';

interface Boxs  extends BoxProps{
    children?: ReactNode; // تعريف اختياري للأطفال من نوع ReactNode
}


const BoxsCard: React.FC<Boxs> = ({ children,...props }) => {
    return ( 
        
        <Box
            {...props}
            sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#0b0c0e",
            borderRadius: "25px",
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}>
            {children}
        </Box>
    );
}

export default BoxsCard;
