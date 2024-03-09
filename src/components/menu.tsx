import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import React ,{ useEffect, useState }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
const Menu: React.FC = () => {
    const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isOpen,setIsOpen] = useState(false)
    useEffect(() => {
        const updateConstraints = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const newConstraints = {
                left: width > 500 ? -100 : -width / 5,
                right: width > 500 ? 1000 : width / 2,
                top: height > 500 ? -250 : -height / 2,
                bottom: height > 500 ? 250 : height / 2,
            };

            setConstraints(newConstraints);

            // طباعة القيود في وحدة التحكم
            console.log("Constraints:", newConstraints);
        };

        updateConstraints();
        window.addEventListener('resize', updateConstraints);

        return () => window.removeEventListener('resize', updateConstraints);
    }, []);
    useEffect(() => {
        // معالج تغيير حجم النافذة
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };      
        // إضافة معالج لحدث تغيير حجم النافذة
        window.addEventListener('resize', handleResize);
      
        // إزالة معالج الحدث عند تفكيك المكون
        return () => window.removeEventListener('resize', handleResize);
      }, []); // Add windowWidth to the dependency array

    const listItemVariants = {
        hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3 } } // تحديد تأثير الخروج
    };
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren", // لضمان أن يبدأ الأطفال في الظهور بعد ظهور الحاوية
            },
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } } // تحديد تأثير الخروج
    };

    const handleMenuClick = () => {
        // أكواد للتعامل مع الضغط على الأيقونة
        setIsOpen(!isOpen)
        console.log(isOpen)
    };
    return (
        <motion.div
            drag // تمكين السحب
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            dragConstraints={constraints} // استخدام القيود الديناميكية
            dragElastic={0.1} // مقدار المرونة في السحب
            dragMomentum={true} // ما إذا كان العنصر يجب أن يحتفظ بالزخم بعد التوقف عن سحبه
            className={"menu-style"}

        >
            <ul className="flex-center-col">
                <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center",  }}>
                    <Avatar
                        alt="logo"
                        src="/نوبي العزيز.png"

                    />
                    {
                        windowWidth < 600 ? <MenuIcon onClick={handleMenuClick} /> : null
                    }
                </Box>
                <motion.div
                    variants={containerVariants}
                    className={`text-menu ${isOpen ?  "open" : ""}` } >
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/about">About</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/contact">Contact</Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/projects">Projects</Link>
                    </motion.li>
                </motion.div>
            </ul>
        </motion.div>
    );
}

export default Menu