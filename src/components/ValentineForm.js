import React, { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

function ValentineForm() {
    const [stage, setStage] = useState(0); // 0: Valentine, 1: Marriage, 2: Kids, 3: How Many, 4: Final
    const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px', position: 'relative' });
    const [noButtonScale, setNoButtonScale] = useState(1);
    const [noButtonRotation, setNoButtonRotation] = useState(0);

    const moveNoButton = () => {
        const randomTop = Math.floor(Math.random() * 70) + 10 + '%';
        const randomLeft = Math.floor(Math.random() * 70) + 10 + '%';

        // Progressively crazier
        if (stage === 1) {
            setNoButtonScale(prev => Math.max(0.05, prev - 0.15));
        } else if (stage >= 2) {
            setNoButtonScale(prev => Math.max(0.01, prev - 0.2));
            setNoButtonRotation(prev => prev + 90);
        }

        setNoButtonPos({
            position: 'fixed',
            top: randomTop,
            left: randomLeft,
            zIndex: 1000,
        });
    };

    const handleYes = () => {
        if (stage < 4) {
            setStage(stage + 1);
            // Reset no button for next stage
            setNoButtonPos({ top: '0px', left: '0px', position: 'relative' });
            setNoButtonScale(1);
            setNoButtonRotation(0);
        }
    };

    if (stage === 4) {
        return (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#d81b60', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                    MELIS & ME: A FAMILY OF FIVE! 👨‍👩‍👧‍👦🏠🍼
                </Typography>
                <Typography variant="h4" sx={{ color: '#ad1457', fontStyle: 'italic' }}>
                    I can't wait for our three little ones! ❤️💍✨
                </Typography>
                <Box sx={{ mt: 4, fontSize: '4rem' }}>
                    ✨💖🏘️🧸🎠🚲🍼💍🥂🎉
                </Box>
            </Box>
        );
    }

    const content = [
        {
            title: "Will You Be My Valentine? 💐",
            emojis: "💐🌹🌷🌸🌺",
            btn1: "Yes",
            btn2: "No"
        },
        {
            title: "Will You Marry Me? 💍✨",
            emojis: "💍👰‍♀️🤵‍♂️💒🥂",
            btn1: "Yes",
            btn2: "Wait... No?"
        },
        {
            title: "Will you be the mother of our kidsss? 👶🍼",
            emojis: "👶🍼🏘️🧸🧺👨‍👩‍👧‍👦",
            btn1: "Yes",
            btn2: "Uhh... I'll think?"
        },
        {
            title: "How many kids do you want? 🧸🛝",
            emojis: "🎠🎡🍼🧺🧼🧷",
            btn1: "3",
            btn2: "5"
        }
    ][stage];

    return (
        <Paper
            elevation={6}
            sx={{
                p: 5,
                mt: 4,
                borderRadius: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
                maxWidth: 600,
                mx: 'auto',
                border: '3px solid #f8bbd0'
            }}
        >
            <Typography variant="h3" gutterBottom sx={{ color: '#d81b60', fontWeight: 'bold' }}>
                {content.title}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 5, position: 'relative', height: '120px', alignItems: 'center' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        borderRadius: 10,
                        px: 6,
                        py: 2,
                        fontSize: '1.5rem',
                        backgroundColor: '#d81b60',
                        '&:hover': { backgroundColor: '#ad1457', transform: 'scale(1.1)' },
                        transition: 'all 0.3s'
                    }}
                    onClick={handleYes}
                >
                    {content.btn1}
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    sx={{
                        borderRadius: 10,
                        px: 4,
                        ...noButtonPos,
                        transform: `scale(${noButtonScale}) rotate(${noButtonRotation}deg)`,
                        transition: 'all 0.2s ease-out',
                        opacity: noButtonScale < 0.2 ? 0.2 : 1
                    }}
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                >
                    {content.btn2}
                </Button>
            </Box>

            <Box sx={{ mt: 5, fontSize: '3rem' }}>
                {content.emojis}
            </Box>
        </Paper>
    );
}

export default ValentineForm;
