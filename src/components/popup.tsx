import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/system';
import { Box, CircularProgress, TypeAction , Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  typeAction : string ;
  
}

const  Popup: React.FC<PopupProps> = ({ isOpen, onClose, typeAction }) => {
  const MotionBox = styled(motion.div)({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { 
    if (isOpen) {
      // هذه الدالة تُستدعى فقط عند فتح الـPopup
      const timeOutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // مدة التأخير 5 ثواني

      return () => clearTimeout(timeOutId); // تنظيف عند إغلاق الـPopup أو إعادة فتحه
    } else {
      // إعادة تعيين حالة التحميل إلى true كلما تم إغلاق الـPopup
      setIsLoading(true);
    }
  }, [isOpen]); // إضافة isOpen إلى مصفوفة الاعتمادات

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ width: { xs: '80%', sm: '60%', md: '40%', lg: '30%' }, height: "50%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 6, backgroundColor: 'black', borderRadius: '10px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <>
                <CircularProgress color="secondary" />
                <p>The link is being prepared</p>

                
              </>
            ) : (
              <>
                <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
                <p>Link preparation has been completed</p>
                {
                typeAction == "Palestine" ? (
                  <Button variant="contained"><a href="https://youtu.be/1RXycTCh49U?si=910Od2lsPe0tH5yl" target="_blank"  >Palestine issue</a></Button>
                ) : (
                  typeAction == "Social media" ? (
                    <Box className={""} sx={{width:"100%" , display:"flex", flexDirection:{xs:"column" , sm:"column",md:"row"} , height:{xs:"80%" ,sm:"80%" , md:"auto" } , justifyContent:"space-around",textAlign:{xs:"center",sm:"center",md:"left"}}}  >
                      <Button  variant="outlined"><a href="https://www.instagram.com/s.a.ifi/" target="_blank"  >Instagram</a></Button>
                      <Button  variant="outlined"><a href="https://github.com/MohammedSaifiCoder" target="_blank"  >Github</a></Button>
                    </Box>
                  ) : (
                    typeAction == "phone" ? (
                      <Box>
                        <h1 className=' text-white text-2xl'>+96207947514430</h1>
                      </Box>
                    ) :  typeAction == "cv" ? (
                      <Box>
                      <h1 className=' text-white text-2xl'>It is being prepared</h1>
                    </Box>
                    ): null
                  )
                )
                }

              </>
            )}
            <ClearIcon sx={{ position: 'absolute', top: 8, right: 8, cursor: 'pointer' }} onClick={onClose} />
          </MotionBox>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;