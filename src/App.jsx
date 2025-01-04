import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import { Container, Typography, Box } from '@mui/material';
    import LifeTracker from './components/LifeTracker';
    import GoalTracker from './components/GoalTracker';
    import DailyMotivation from './modules/DailyMotivation';
    import PastGoals from './components/PastGoals';
    import PastInspirations from './components/PastInspirations';

    export default function App() {
      return (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={
              <>
                <LifeTracker dob="1990-01-01" lifespan={80} />
                <DailyMotivation />
                <GoalTracker />
              </>
            } />
            <Route path="/past-goals" element={<PastGoals />} />
            <Route path="/past-inspirations" element={<PastInspirations />} />
          </Routes>
          
          <Box className="footer">
            <Typography variant="body2">
              "Make every moment count" - DHARMA App
            </Typography>
          </Box>
        </Container>
      );
    }
