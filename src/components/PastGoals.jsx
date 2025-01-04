import React from 'react';
    import { Typography } from '@mui/material';

    export default function PastGoals() {
      return (
        <div className="card">
          <Typography variant="h4">Past Goals</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Your past goals will appear here...
          </Typography>
        </div>
      );
    }
