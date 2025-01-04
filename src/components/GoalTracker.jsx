import React from 'react';
    import { useState } from 'react';
    import { TextField, Button, Box } from '@mui/material';

    export default function GoalTracker() {
      const [goal, setGoal] = useState('');
      const [milestone, setMilestone] = useState('');
      const [deadline, setDeadline] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle goal submission
      };

      return (
        <div className="card">
          <h3>Set Your Goals</h3>
          <Box component="form" onSubmit={handleSubmit} className="goal-form">
            <TextField
              fullWidth
              label="What do you want to achieve?"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="How will you measure success?"
              type="number"
              value={milestone}
              onChange={(e) => setMilestone(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="When will you achieve this?"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <Button 
              type="submit" 
              variant="contained" 
              className="submit-button"
              size="large"
            >
              Commit to Your Goal
            </Button>
          </Box>
        </div>
      );
    }
