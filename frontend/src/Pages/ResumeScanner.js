import { Box, Button, Container,Typography, Paper, Stack} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Header from '../component/Header';
import { LoadingButton } from '@mui/lab';
const ResumeScanner = () => {
    return (
        <>
            <Box backgroundColor='#F0F8FF' sx={{ minHeight: '100vh' }}>
                <Header />
                <Container sx={{ mt: 4 }} >
                <Paper elevation={3} sx={{ p: 3, my: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Resume Scanner
                        </Typography>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                Upload your resume:
                            </Typography>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <Button
                                    sx={{ marginTop: 2 }}
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Resume
                                </Button>
                                <Typography variant="subtitle1"></Typography>
                            </Stack>
                        </Box>

                        <Stack spacing={3} sx={{ mt: 4 }}>
                            <Stack direction='row' alignItems='center' spacing={2} justifyContent='center'>
                                <LoadingButton
                                    variant="contained"
                                    color="primary"
                                >
                                    Scan Resume
                                </LoadingButton>
                                <LoadingButton
                                    variant="contained"
                                    color="primary"
                                >
                                    Clear
                                </LoadingButton>
                            </Stack>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}
export default ResumeScanner


