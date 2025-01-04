import React, { useEffect, useState } from 'react';
    import { Box, Typography, Button } from '@mui/material';
    import { useNavigate } from 'react-router-dom';
    import ClockIcon from './icons/clock.svg';
    import ChecklistIcon from './icons/checklist.svg';
    import SparkIcon from './icons/spark.svg';

    export default function LifeTracker({ dob, lifespan }) {
      const navigate = useNavigate();
      const [progress, setProgress] = useState(0);
      const [timeDetails, setTimeDetails] = useState({
        days: 0,
        weeks: 0,
        months: 0,
        years: 0
      });
      const [showDays, setShowDays] = useState(true);

      useEffect(() => {
        const today = new Date();
        const birthDate = new Date(dob);
        const endDate = new Date(birthDate.setFullYear(birthDate.getFullYear() + lifespan));
        
        const totalTime = endDate - birthDate;
        const elapsedTime = today - birthDate;
        const remainingTime = endDate - today;

        const calculatedProgress = Math.min(100, Math.max(0, 
          Math.round((elapsedTime / totalTime) * 100)
        ));
        setProgress(calculatedProgress);

        const daysLeft = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
        setTimeDetails({
          days: daysLeft,
          weeks: Math.floor(daysLeft / 7),
          months: Math.floor(daysLeft / 30),
          years: Math.floor(daysLeft / 365)
        });
      }, [dob, lifespan]);

      const toggleTimeUnit = () => {
        setShowDays(!showDays);
      };

      return (
        <div className="card">
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src={ClockIcon} alt="Clock Icon" className="icon" />
            Your Life Journey
          </Typography>

          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <Typography variant="body1" sx={{ 
            textAlign: 'right',
            color: 'var(--text-color)',
            opacity: 0.8
          }}>
            {progress}% of your life completed
          </Typography>

          <div 
            className="days-left" 
            onClick={toggleTimeUnit}
          >
            {showDays ? `${timeDetails.days} days` : `${timeDetails.years} years`}
          </div>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 2,
            mt: 3
          }}>
            <TimeCard value={timeDetails.years} unit="Years" />
            <TimeCard value={timeDetails.months} unit="Months" />
            <TimeCard value={timeDetails.weeks} unit="Weeks" />
            <TimeCard value={timeDetails.days} unit="Days" />
          </Box>

          <Typography variant="body1" sx={{ 
            mt: 3,
            fontStyle: 'italic',
            textAlign: 'center',
            color: 'var(--text-color)',
            opacity: 0.8
          }}>
            "The future depends on what you do today." - Mahatma Gandhi
          </Typography>

          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            mt: 4
          }}>
            <button
              className="button-primary"
              onClick={() => navigate('/past-goals')}
            >
              <img src={ChecklistIcon} alt="Checklist" className="icon" />
              View Past Goals
            </button>
            <button
              className="button-primary"
              onClick={() => navigate('/past-inspirations')}
            >
              <img src={SparkIcon} alt="Spark" className="icon" />
              Past Inspirations
            </button>
          </Box>
        </div>
      );
    }

    function TimeCard({ value, unit }) {
      return (
        <div className="time-card">
          <Typography variant="h5" sx={{ 
            color: 'var(--primary-color)',
            fontWeight: 600,
            mb: 1
          }}>
            {value}
          </Typography>
          <Typography variant="body1" sx={{
            color: 'var(--text-color)',
            opacity: 0.8,
            fontWeight: 400
          }}>
            {unit}
          </Typography>
        </div>
      );
    }
