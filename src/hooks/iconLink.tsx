import { useRouter } from 'next/navigation';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import React from 'react';

interface TypeCompoant{
    iconComponent: React.ReactNode,
    route:string
}

const IconLink = ({ iconComponent, route }:TypeCompoant) => {
  const router = useRouter();
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
const anime = {
    scale: 1.1,
    transition: { ease: "easeOut", duration: 0.2 },
}
  const handleClick = () => {
    router.push(route);
  };
  const MotionBox = styled(motion.div)({});

  return (
    <MotionBox whileHover={anime} whileTap={{ scale: 0.9 }} sx={myStyles.sx}>
        <a href={route} target="_blank">
        {iconComponent}
        </a>
    </MotionBox>
  );
};

export default IconLink;