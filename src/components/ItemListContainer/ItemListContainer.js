import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "../Button/Button"

const CardUser = ({
  img,
  name,
  description,
  price,
  backgroundColor,
  children,
}) => {
  return (
    <Card sx={{ maxWidth: 345, background: backgroundColor }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant= "h6" color="text.secondary">
            {price}
          </Typography>
          <Button>Add to Chart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardUser;
