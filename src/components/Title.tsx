
import { styled } from '@mui/material/styles';
import { Stack, Typography, type SvgIconProps } from '@mui/material';


interface TitleProps {
    text: string; 
    icon?: React.ComponentType<SvgIconProps>; 
}

export default function Title({text, icon: Icon}: TitleProps) {

    return (
        <StyledTitle direction={'row'}>
            {Icon && <Icon sx={{margin: '10px'}} fontSize='large'/>}
            <Typography variant='h2' sx={{textTransform: 'uppercase'}}>{text}</Typography>
        </StyledTitle>
    )
}

const StyledTitle = styled(Stack)(() => ({
    alignItems: 'center',
}))
