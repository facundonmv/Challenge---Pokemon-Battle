import { CardContent, CardMedia, Card as MUICard } from "@mui/material";
import { CardProps } from "./types";

export default function Card(props:CardProps) {

    const { children, classes, cardMediaUrl, cardMediaTitle } = props;

  return (
    <MUICard 
        classes={classes}
    >
        {
            cardMediaUrl && 
            <CardMedia
                component="img"
                sx={{ objectFit: "contain" }}
                image={cardMediaUrl}
                alt={cardMediaTitle}
            />
        }
            {children}
    </MUICard>
  )
}
