import { Accordion, AccordionDetails, AccordionSummary, Avatar, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface EducationType {
    title: string, 
    degree: string, 
    location: string, 
    image: string, 
    startYear: string,
    endYear: string, 
    description: string, 
    link: string
}

interface CardProps {
    educationInfo: EducationType; 
}

export default function EducationCard({educationInfo}: CardProps) {
    
    return (
        <StyledEducationCard>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Stack direction={'row'} sx={{alignItems: 'center'}} spacing={1.5}>
                    <Avatar 
                        alt={educationInfo.location} 
                        src={`src/assets/logo_images/${educationInfo.image}`} 
                        variant="square" 
                        component={'a'}
                        href={educationInfo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{width: '50px', height: '50px'}}
                    />
                    <Stack>
                        <Typography variant="h3">{educationInfo.degree} {educationInfo.title}</Typography>
                    </Stack>
                </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{marginTop: '-10px'}}>
                <Typography component={'a'} href={educationInfo.link} target="_blank" rel="noopener noreferrer" sx={{color: 'inherit', textDecoration: 'none'}}>{educationInfo.location} • <span style={{color: 'gray'}}>{educationInfo.startYear} - {educationInfo.endYear}</span></Typography>
                <Typography>{educationInfo.description}</Typography>
            </AccordionDetails>
        </StyledEducationCard>
    );

}

const StyledEducationCard = styled(Accordion)(({theme}) => ({
    borderRadius: 0, 
    backgroundColor: theme.palette.cardDarker, 
    '&.Mui-expanded': {
      marginBlock: '5px',
    },
})); 

