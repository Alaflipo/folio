
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface JobType {
    title: string, 
    company: string, 
    location: string, 
    employment: string, 
    image: string, 
    startYear: string,
    endYear: string, 
    description: string, 
    link: string
}

interface CardProps {
    jobInfo: JobType; 
}

export default function JobCard({jobInfo}: CardProps) {
    
    return (
        <StyledJobCard>
            <Stack direction={'row'} sx={{alignItems: 'center', marginBottom: '10px'}} spacing={1.5}>
                <Avatar 
                    alt={jobInfo.company} 
                    src={`src/assets/logo_images/${jobInfo.image}`} 
                    variant="square" 
                    component={'a'}
                    href={jobInfo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{width: '50px', height: '50px'}}
                />
                <Stack>
                    <Typography variant="h3">{jobInfo.title}</Typography>
                    <Stack direction={'row'}>
                        <Typography component={'a'} href={jobInfo.link} target="_blank" rel="noopener noreferrer" sx={{color: 'inherit', textDecoration: 'none'}}>{jobInfo.company}</Typography>
                        <Typography sx={{color: 'gray', marginLeft: '5px'}}> • {" "}{jobInfo.startYear} - {jobInfo.endYear}</Typography>
                    </Stack>
                </Stack>
                
            </Stack>
            {/* <Divider sx={{borderBottomWidth: 3, marginBottom: '10px'}}/> */}
            <Typography sx={{whiteSpace: 'pre-wrap'}}>{jobInfo.description}</Typography>
        </StyledJobCard>
    );

}

const StyledJobCard = styled(Paper)(({theme}) => ({
    textAlign: 'left', 
    padding: '10px', 
    marginBlock: '20px', 
    backgroundColor: theme.palette.cardDarker, 
})); 

