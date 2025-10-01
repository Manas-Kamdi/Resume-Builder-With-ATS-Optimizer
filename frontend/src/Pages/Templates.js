import Header from '../component/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button,Stack,Card} from '@mui/material';
import templates1 from '../asset/templates/template1.png';
import templates2 from '../asset/templates/template2.png';
import templates3 from '../asset/templates/template3.png';
import templates4 from '../asset/templates/template4.png';
import templates5 from '../asset/templates/template5.png';
import templates6 from '../asset/templates/template6.png';

const Templates = () => {
  const navigate = useNavigate();
  const templates = [templates1, templates2, templates3, templates4, templates5, templates6]
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleCardClick = (index) => {
    setSelectedTemplate(index);
  };
  const handleNextPage = () => {
      navigate(`/addResumeDetails/template?template=${selectedTemplate + 1}`);
  };
  return (
    <>
      <Header />
      <Box px={4} py={3} backgroundColor='#F0F8FF'>
        <Typography variant="h4" fontWeight="bold" >
          Select a Template
        </Typography>
        <Stack direction="row" gap={5} flexWrap="wrap" margin={5}>
          {templates.map((template, index) => (
            <Card
            key={index}
            onClick={() => handleCardClick(index)}
            sx={{
              cursor: 'pointer',
              boxShadow: selectedTemplate === index ? '0 0 10px 2px rgba(0, 150, 255, 0.7)' : 'none',
              transition: 'box-shadow 0.3s ease-in-out',
            }}
            >
              <img src={template} alt={index} height={500} width={400} />
            </Card>
          ))}
        </Stack>
        <Box textAlign='center'>
          <Button variant="contained" color="primary" onClick={handleNextPage}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  )
}
export default Templates