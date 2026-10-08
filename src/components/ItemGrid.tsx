import { styled, useTheme } from "@mui/material/styles";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface ItemData {
    'id': number, 
    'title': string, 
    'image': string, 
    'description': string
}

function ItemCard({itemData}: {itemData: ItemData}) {

    const theme = useTheme(); 
    
    return (
        <StyledItemCard>
            <CardMedia
                sx={{ height: 160}}
                image={`src/assets/project_images/${itemData.image}`}
                title={itemData.title}
            />
            <CardContent sx={{ flexGrow: 1, marginBottom: '-10px'}}>
                <Typography variant="h2" sx={{marginBottom: '10px'}}>{itemData.title}</Typography>
                <Typography>{itemData.description}</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button endIcon={<ArrowForwardIcon/>} sx={{marginBottom: '5px', color: theme.palette.text.primary, fontSize: '16px', fontWeight: 'bold'}}>Learn more</Button>
            </CardActions>
        </StyledItemCard>
    );

}

const StyledItemCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.cardDarker, 
    borderRadius: '10px', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
})); 


interface ItemGridProps {
    itemData: ItemData[]
}


export default function ItemGrid({itemData}: ItemGridProps) {

    return (
        <Grid container spacing={1.5}>
            {itemData.map(item => {
                return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ItemCard key={item.id} itemData={item}/>
                    </Grid>
                )
            })}
        </Grid>
    ); 
}
