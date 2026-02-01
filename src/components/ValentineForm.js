import React, { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

function ValentineForm() {
    const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px', position: 'relative' });
    const [answered, setAnswered] = useState(false);

    const moveNoButton = () => {
        const randomTop = Math.floor(Math.random() * 80) + '%';
        const randomLeft = Math.floor(Math.random() * 80) + '%';
        setNoButtonPos({
            position: 'fixed',
            top: randomTop,
            left: randomLeft,
            zIndex: 1000,
        });
    };

    if (answered) {
        return (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#d81b60', mb: 2 }}>
                    Yay! I Knew You'd Say Yes! 💖💐
                </Typography>
                <Typography variant="h5" sx={{ color: '#ad1457' }}>
                    I love you so much Melis! 🌹✨
                </Typography>
            </Box>
        );
    }

    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                mt: 4,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(5px)',
                textAlign: 'center',
                maxWidth: 500,
                mx: 'auto'
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: '#d81b60', fontWeight: 'bold' }}>
                Will You Be My Valentine? 💐
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, position: 'relative', height: '100px', alignItems: 'center' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ borderRadius: 10, px: 4, backgroundColor: '#d81b60', '&:hover': { backgroundColor: '#ad1457' } }}
                    onClick={() => setAnswered(true)}
                >
                    Yes
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    sx={{
                        borderRadius: 10,
                        px: 4,
                        ...noButtonPos,
                        transition: 'all 0.2s ease-out'
                    }}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                >
                    No
                </Button>
            </Box>

            <Box sx={{ mt: 3, fontSize: '2rem' }}>
                💐🌹🌷🌸🌺
            </Box>
        </Paper>
    );
}

export default ValentineForm;
