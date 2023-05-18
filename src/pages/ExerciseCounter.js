import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCounter = () => {

    return (
        <div>
            <form method="get">
                <Stack p="80px" gap="30px" backgroundColor="#fff3f4" width="90%" margin="auto" mt="100px" >
                    <Typography variant="h3">Check Out our All-New Pose-Corrector </Typography>
                    <Typography fontSize="22px" lineHeight={"35px"} mb={4}>
                        A feature that counts the repitions and even corrects your exercise form in <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>Real-time.</span><br />
                        This computer vision technique detects <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>human posture in images or videos and shows the keypoints such as elbow or knee</span> in the output image.
                    </Typography>
                    <Link to={`http://192.168.43.153:5000`}>
                        <Button variant="contained" color="success" >Try it Out!!</Button>
                    </Link>
                </Stack>
            </form>
        </div>
    )
}

export default ExerciseCounter