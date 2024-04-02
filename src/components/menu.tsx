import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const Menu: React.FC = () => {
    const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setClient] = useState(false)

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        updateWindowWidth(); // Update width on component mount

        // Add event listener to update width on window resize
        window.addEventListener('resize', updateWindowWidth);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []); // Empty dependency array to run effect only once on component mount
    useEffect(() => {
        setClient(true);
    }, []);

    const listItemVariants = {
        hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            drag
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            dragConstraints={constraints}
            dragElastic={0.1}
            dragMomentum={true}
            className={"menu-style"}
        >
            <ul className="flex-center-col">
                <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center" }}>
                    {isClient && <Avatar alt="logo" src="./logo.svg" />}
                    {windowWidth < 600 && <MenuIcon onClick={handleMenuClick} />}
                </Box>
                <motion.div
                    variants={containerVariants}
                    className={`text-menu ${isOpen ? "open" : ""}`} >
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                    >
                        <Link className='   p-5' href="/">Home</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link className='   p-5' href="/about">About</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link className='p-5' href="/contact">Contact</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="https://www.upwork.com/" target="_blank" className='p-5' >upowrk</a>
                    </motion.li>
                </motion.div>
            </ul>
        </motion.div>
    );
}

export default Menu;
