import React from 'react';
import BoxS from "@/components/BoxCards"
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ end, duration = 5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <CountUp end={end} duration={duration} />
    </motion.div>
  );
};

const CounterGrid: React.FC = () => {
  return (
    <Grid item xs={12} md={6} sx={{ height: '40vh' }}>
      <BoxS>
        <Grid  sx={{ width: '100%', minHeight: '100%' }} container direction="row" justifyContent="space-evenly" alignItems="center" className=' text-center'>
          <Grid item xs={3.5} md={3} className='bg-[#0b0b0c] rounded-bl-xl rounded-tr-xl' sx={{ height: "120px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <h1 className='text-2xl'>
              <AnimatedNumber end={20} />
            </h1>
            <p style={{ fontSize: "9px" }}>total projects</p>
          </Grid>
          <Grid item xs={3.5} md={3} className='bg-[#0b0b0c] rounded-bl-xl rounded-tr-xl' sx={{ height: "120px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <h1 className='text-2xl'>
              <AnimatedNumber end={5} />
            </h1>
            <p style={{ fontSize: "9px" }}>Strong projects</p>
          </Grid>
          <Grid item xs={3.5} md={3} className='bg-[#0b0b0c] rounded-bl-xl rounded-tr-xl' sx={{ height: "120px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <h1 className='text-2xl'>
              <AnimatedNumber end={2} />
            </h1>
            <p style={{ fontSize: "9px" }}>Years of Experience</p>
          </Grid>
        </Grid>
      </BoxS>
    </Grid>
  );
};

export default CounterGrid;
