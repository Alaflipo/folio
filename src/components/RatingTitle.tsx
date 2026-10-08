import { Rating, Stack, Typography } from "@mui/material";




export default function RatingTitle({name, value}: {name: string, value: number}) {

    return (
        <Stack direction={'row'} sx={{justifyContent: 'space-between'}}>
            <Typography>{name}</Typography>
            <Rating precision={0.5} value={value} readOnly />
        </Stack>
    ); 
}
