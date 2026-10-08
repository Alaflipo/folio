import type { ReactNode } from "react";

import { Divider, Paper, type SvgIconProps } from "@mui/material";

import Title from "./Title";
import { styled, type SxProps } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

interface CardProps {
    children: ReactNode; 
    title: string; 
    icon: React.ComponentType<SvgIconProps>; 
    sx?: SxProps<Theme>;
}

export default function Card({children, title, icon, sx}: CardProps) {
    
    return (
        <StyledCard sx={sx}>
            <Title text={title} icon={icon}/>
            <Divider sx={{borderBottomWidth: 3, marginBottom: '10px'}}/>
            {children}
        </StyledCard>
    );

}

const StyledCard = styled(Paper)(() => ({
    // width: '100%', 
    padding: '20px', 
    borderRadius: '10px', 
    textAlign: 'left', 
})); 
