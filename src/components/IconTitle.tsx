import { Stack, Typography, type SvgIconProps } from "@mui/material";



interface IconTitleProps {
    icon: React.ComponentType<SvgIconProps>; 
    title: string, 
    url?: string, 
}

export default function IconTitle({icon: Icon, title, url}: IconTitleProps) {

    return (
        <Stack 
            direction={'row'} 
            spacing={1}
            component={'a'}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{color: 'inherit', padding: '5px'}}
        >
            <Icon/>
            <Typography>{title}</Typography>
        </Stack>
    );
}
