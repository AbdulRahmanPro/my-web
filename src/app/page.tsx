  "use client"
  import React ,{ useEffect, useState }  from 'react';
  import BoxS from "@/components/BoxCards"
  import Image from "next/image"
  import { Box, Grid, Typography, useTheme,Button } from '@mui/material';
  import { motion } from 'framer-motion';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
  import dynamic from 'next/dynamic';
  import AnimatedNumbers from "@/components/AnimatedNumbers"
  import Popup from "@/components/popup"
  type ProgressState = Record<string, number>;
  type CompletedSkillsState = Record<string, boolean>;
  const Menus = dynamic(() => import('@/components/menu'), { ssr: false });

  
  export default function Home() {


    const [completedSkills, setCompletedSkills] = useState<CompletedSkillsState>({
      'Next Js': false,
      'React': false,
      'tailwind css': false,
      'Python': false,
    });
    const [progress, setProgress] = useState<ProgressState>({
      'Next Js': 0,
      'React': 0,
      'tailwind css': 0,
      'Python': 0,
    });

    const handleAnimationComplete = (skillName: string) => {
      setCompletedSkills((prev) => ({ ...prev, [skillName]: true }));
    };
    const [isPopup, setPopupIs] = useState(false)
    const [typeActionModel, settypeActionModel] = useState("")


    useEffect(() => {
      // تعيين القيم النهائية للشريط التقدمي بعد تحميل المكون
      const timer = setTimeout(() => {
        setProgress({
          'Next Js': 90,
          'React': 80,
          'tailwind css': 75,
          'Python': 75,
        });
      }); // بدء الأنيميشن بعد 500 مللي ثانية من تحميل المكون
    }, []);
    const skills = [
      { icon: "./nextj.svg", name: 'Next Js', color: "text-yellow-400", value: 90 },
      { icon: "./react.svg", name: 'React', color: "text-blue-400", value: 80 },
      { icon: "./tailwind-css-.svg", name: 'tailwind css', color: "text-green-400", value: 75 },
      { icon: "./python.svg", name: 'Python', color: "text-green-400", value: 75 },
      // ... يمكنك إضافة المزيد
    ];
    const theme = useTheme();
    const closePopup  = () => {
      setPopupIs(!isPopup)
    }

    const updateActionPopup = (state:string) =>{
      settypeActionModel(state)
    }

    const MuilteFunc = (state:string)=>{
      closePopup()
      updateActionPopup(state)

    }
    return (
      <>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={1} sx={{ width: '100%', minHeight: '100vh', pl: { xs: 2, sm: 3, md: 25 }, pr: { xs: 2, sm: 3, md: 25 }, pt: 10 }}>
          <Grid item xs={12} md={6} sx={{ height: '40vh' }}>
            <BoxS className={" flex   justify-evenly "}>
              <Image layout="responsive" className=' max-w-40' alt='logo' src={'./logo.svg'} width={171} height={194} />
              < Box className={"max-h-min"} sx={{ display: "flex", flexDirection: "column",maxWidth:"150px", justifyContent: "center", alignItems: "start", textAlign: "left" }}>
                <p className=' ml-1 text-[#C0C0C0]  text-xs'>A WEB DEVLOPER</p>
                <h1 className=' text-2xl'>Nedal</h1>
                <h2 className=' text-2xl'>Daher</h2>
                <p className=' text-xs '>Professional software developer specializing </p>
                <p className=' text-xs '>in the web</p>
              </Box>
            </BoxS> {/* يمثل الشعار في الأعلى */}
          </Grid>
          {/* الصف الثاني: عنصرين كبيرين */}
          <Grid item xs={12} md={6} sx={{ height: '40vh' }}>
            <BoxS sx={{ width: '100%' }} className=' flex  flex-col    items-center justify-center'  >
              {skills.map((skill, index) => (
                <Box key={index} className={" mx-auto my-auto "} sx={{ mb: 1, padding: "5px", maxWidth: { xs: "85%", sm: "400px" }, width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Image alt={skill.name} src={skill.icon} width={16} height={16} />
                    <Typography sx={{ fontSize: "11px" }} variant="body1" color="white">{skill.name}</Typography>
                  </Box>
                  <Box sx={{ position: 'relative', height: { xs: "8px", sm: "6px" }, borderRadius: 5, backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800] }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
                      onAnimationComplete={() => handleAnimationComplete(skill.name)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        borderRadius: 5,
                        backgroundColor: skill.value === 100 ? theme.palette.success.main : theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '0.5rem',
                      }}
                    >
                      {/* هنا نقوم بعرض القيمة عندما يكتمل الأنيميشن */}
                      {completedSkills[skill.name] && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }} // أضف تأخير بناءً على مؤشر العنصر
                        >
                          <Typography style={{ fontSize: "10px" }} className='   font-bold' variant="body1" color="white">
                            {skill.value}%
                          </Typography>
                        </motion.span>
                      )}
                    </motion.div>
                  </Box>
                </Box>
              ))}
            </BoxS>
          </Grid>
          <Grid item xs={12} md={3} sx={{ height: '40vh' }}>
            <BoxS>
              <Grid
                container
                direction="row"
                justifyContent="center" // يضمن توسيط العناصر أفقيًا
                alignItems="center" // يضمن توسيط العناصر عموديًا
                sx={{ width: '100%', minHeight: '100%' }}
              >
                {/* عنصر الشبكة للصورة SVG */}
                <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image alt='Image CV' src={"./CV.svg"} width={131} height={115} />
                </Grid>
                {/* عنصر الشبكة للنص وأيقونة التحميل */}
                <Grid className=' space-x-10' item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography color="#C0C0C0" sx={{ fontSize: "10px" }}>My Cv</Typography>
                    <Typography sx={{ fontSize: "20px" }}>Download</Typography>
                  </Box>
                  <motion.span
                    whileHover={{
                      rotate: 180
                    }}
                  >
                    <FontAwesomeIcon onClick={()=>{MuilteFunc("cv")}} size='lg' style={{ cursor: "pointer" }} icon={faArrowRight} />
                  </motion.span>
                </Grid>
              </Grid>
            </BoxS>
          </Grid>

          <Grid item xs={12} md={3} sx={{ height: '40vh' }}>
            <BoxS>
              <Grid
                container
                direction="row"
                justifyContent="center" // يضمن توسيط العناصر أفقيًا
                alignItems="center" // يضمن توسيط العناصر عموديًا
                sx={{ width: '100%', minHeight: '100%' }}
              >
                {/* عنصر الشبكة للصورة SVG */}
                <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image alt='Image CV' src={"./Mobile Phone.svg"} width={131} height={115} />
                </Grid>
                {/* عنصر الشبكة للنص وأيقونة التحميل */}
                <Grid className=' space-x-10' item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography color="#C0C0C0" sx={{ fontSize: "10px" }}>My Phone</Typography>
                    <Typography className=' w-max' sx={{ fontSize: "20px" }}>Call Me</Typography>
                  </Box>
                  <motion.span
                    whileHover={{
                      rotate: 180
                    }}
                  >
                    <FontAwesomeIcon onClick={()=>{MuilteFunc("phone")}} size='lg' style={{ cursor: "pointer" }} icon={faArrowRight} />
                  </motion.span>
                </Grid>
              </Grid>
            </BoxS>
          </Grid>
          <AnimatedNumbers />

          <Grid item xs={12} md={6} sx={{ height: '40vh' }}>
            <BoxS>
              <Grid
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                container
                sx={{ width: '100%', minHeight: '100%' }}
              >
                <Grid item xs={5} md={4.5}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 78, height: 78, bgcolor: "#202123", borderRadius: "50px", backdropFilter: 'blur(10px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', }}>
                    <FontAwesomeIcon   icon={faGithub} className=' text-6xl ' />
                  </Box>
                </Grid>
                <Grid item xs={3} md={2.2}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 78, height: 78, bgcolor: "#202123", borderRadius: "50px", backdropFilter: 'blur(10px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', }}>
                    <FontAwesomeIcon className=' text-5xl ' icon={faDiscord} />
                  </Box>
                </Grid>
                <Grid item xs={10} md={10}>
                  <p style={{ fontSize: "10px" }} className='text-[#C0C0C0]'>My Accounts</p>
                  <h2>Social media</h2>
                </Grid>
                <Grid item xs={0} md={0}>
                  <motion.div
                    whileHover={{
                      rotate: 180,
                    }}
                  >
                    <FontAwesomeIcon size='lg' onClick={()=>{MuilteFunc("Social media")}} style={{ cursor: "pointer" }} icon={faArrowRight} />
                  </motion.div>
                </Grid>
              </Grid>
            </BoxS> {/* يمثل العنصر الثاني في الصف الثالث */}
          </Grid>
          <Grid item xs={12} md={6} sx={{ height: '40vh' }}>
            <BoxS>
              <Grid
                container
                direction="row"
                justifyContent="center" // يضمن توسيط العناصر أفقيًا
                alignItems="center" // يضمن توسيط العناصر عموديًا
                sx={{ width: '100%', minHeight: '100%' }}
              >
                {/* عنصر الشبكة للصورة SVG */}
                <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image alt='Image CV' src={"./Palestine.svg"} width={131} height={115} />
                </Grid>
                {/* عنصر الشبكة للنص وأيقونة التحميل */}
                <Grid className=' space-x-20 ' item xs={12} sm={6} md={12} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography color="#C0C0C0" sx={{ fontSize: "10px" }}>Support</Typography>
                    <Typography className=' w-max' sx={{ fontSize: "20px" }}>Palestine</Typography>
                  </Box>
                  <motion.span
                    whileHover={{
                      rotate: 180,
                    }}
                  >
                    <FontAwesomeIcon onClick={()=>{MuilteFunc("Palestine")}}  style={{ cursor: "pointer" }} size='lg' icon={faArrowRight} />
                  </motion.span>
                </Grid>
              </Grid>
            </BoxS>
          </Grid>
        </Grid>

        <Popup isOpen={isPopup} onClose={closePopup} typeAction={typeActionModel}/>
        
        
      </>
    );
  }
