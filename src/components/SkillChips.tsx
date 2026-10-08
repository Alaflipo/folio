import { Chip, useTheme } from "@mui/material";


interface SkillChipsProps {
    names: string[]
    strengths: number[]
}

export default function SkillChips({names, strengths}: SkillChipsProps) {

    const theme = useTheme();

    const colorsLight = ["#c1efc3", "#9ad49f", "#6dba7a"]
    const colorsDark = ["#1a3a20", "#295e35", "#37884a"];

    const colors = theme.palette.mode === 'dark' ? colorsDark : colorsLight; 

    const chips = names.map((name, index) => {
        const color = colors[strengths[index]-3]
        return <Chip label={name} sx={{backgroundColor: color, margin: '1px'}}/>
    })

    return (
        <div>
            {chips}
        </div>
    );
}
