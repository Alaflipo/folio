import Card from "../components/Card";

import { Avatar, Button, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useColorMode } from "../theme";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ReplyIcon from '@mui/icons-material/Reply';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TopicIcon from '@mui/icons-material/Topic';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


import cvData from '../data/cv.json'; 
import IconTitle from "../components/IconTitle";
import JobCard from "../components/JobCard";
import EducationCard from "../components/EducationCard";
import ItemGrid from "../components/ItemGrid";
import SkillChips from "../components/SkillChips";
import RatingTitle from "../components/RatingTitle";


export default function Home() {
    const theme = useTheme(); // MUI hook to read the active theme object
    const { toggleColorMode } = useColorMode();
    
    return (
        <Stack spacing={2} sx={{width: '100%', maxWidth: '1000px', marginInline: '10px'}}>
            <Button startIcon={theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />} onClick={toggleColorMode} color="inherit"/>
              
            <Stack direction={'row'} sx={{justifyContent: 'center', alignItems: 'center', paddingInline: '5px'}} spacing={4}>
                <Avatar 
                    src="src/assets/morris.jpeg" 
                    sx={{
                        width: 'auto',
                        height: 'auto',
                        aspectRatio: '1',
                        flexShrink: 1,
                        maxWidth: '250px', 
                        maxHeight: '250px', 
                    }}
                />
                <Stack>
                    <Typography variant="h1" sx={{textAlign: 'left', fontSize: { xs: '1.5rem', md: '3rem' }}}>Morris Boers</Typography>
                    <Typography sx={{textAlign: 'left'}}>EngD TU Eindhoven x Philips Healthcare</Typography>
                </Stack>
            </Stack>
            
            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                <Card title={"ABOUT ME"} icon={AssignmentIndIcon}>
                    <Typography>{cvData.aboutMe.text}</Typography>
                    <Typography variant={"h3"} sx={{textAlign: 'center', marginTop: '10px'}}>{cvData.aboutMe.more}</Typography>
                </Card>
                <Card title={"CONTACT"} icon={ReplyIcon} sx={{backgroundColor: theme.palette.cardDarker, height: 'fit-content'}}>
                    <IconTitle 
                        icon={EmailIcon} 
                        title={cvData.contact.mail}
                    />
                    <IconTitle 
                        icon={LocationPinIcon} 
                        title={cvData.contact.location}
                    />
                    <IconTitle 
                        icon={LinkedInIcon} 
                        title={cvData.contact.linkedIn.text}
                        url={cvData.contact.linkedIn.url}
                    />
                    <IconTitle
                        icon={GitHubIcon}
                        title={cvData.contact.github.text}
                        url={cvData.contact.github.url}
                    />
                    <IconTitle 
                        icon={LanguageIcon} 
                        title={cvData.contact.website.text}
                        url={cvData.contact.website.url}
                    />
                    <Stack direction={'row'} sx={{justifyContent: 'center', marginTop: '10px'}}>
                        <Button startIcon={<SendIcon/>} variant="contained">
                            Get in touch!
                        </Button>
                    </Stack>
                </Card>
            </Stack>
            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                <Card title="WORK EXPERIENCE" icon={WorkIcon} sx={{ width: { xs: '100%', md: '60%' }}}>
                    {cvData.work.map((job) => (
                        <JobCard jobInfo={job}/>
                    ))}
                </Card>
                <Stack spacing={2} sx={{ width: { xs: '100%', md: '40%' }}}>
                    <Card title="EDUCATION" icon={SchoolIcon} sx={{height: 'fit-content'}}>
                        {cvData.study.map((education) => (
                            <EducationCard educationInfo={education}/>
                        ))}
                    </Card>
                    <Card title="STRENGTHS" icon={AssignmentTurnedInIcon}>
                        <SkillChips names={Object.keys(cvData.skills)} strengths={Object.values(cvData.skills)}/>
                        <Divider sx={{margin: '10px', borderStyle: 'dotted'}}/>
                        <SkillChips names={Object.keys(cvData.tools)} strengths={Object.values(cvData.tools)}/>
                    </Card>
                    <Card title="LANGUAGES" icon={LanguageIcon}>
                        <RatingTitle name="Dutch" value={5}/>
                        <RatingTitle name="English" value={4}/>
                        <RatingTitle name="German" value={2}/>
                    </Card>
                </Stack>
            </Stack>
            <Card title="PROJECTS" icon={TopicIcon}>
                <ItemGrid itemData={cvData.projects}/>
            </Card>
            
        </Stack>
    ); 
}
