import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

const ExerciseCounter = () => {
    return (
        <div>
            <form action="{{ url_for('show') }}" method="get">
                <Stack p="80px" gap="30px" backgroundColor="#fff3f4" width="90%" margin="auto" mt="100px" >
                    <Typography variant="h3">Check Out our Exercise Counters </Typography>

                    <Button variant="contained" color="success" >Submit</Button>
                </Stack>
            </form>
        </div>
    )
}

export default ExerciseCounter