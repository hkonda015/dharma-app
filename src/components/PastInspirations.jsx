import React from 'react';
    import { Typography } from '@mui/material';

    export default function PastInspirations() {
      return (
        <div className="card">
          <Typography variant="h4">Past Inspirations</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Your past inspirations will appear here...
          </Typography>
        </div>
      );
    }
