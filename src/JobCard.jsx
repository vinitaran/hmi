import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import jobTypeImages from './data/images';


export default function ActionAreaCard({title, image, firstWord}) {

  

  return (
    <Card className='job_card_box' sx={{ maxWidth: 405, height:'300px', margin:'1em' }}>
    <Link style={{textDecoration: 'none', color: 'black'}} to={title}>
      <CardActionArea style={{position:'relative'}}>
        <CardMedia
          component="img"
          height="300"
          image={jobTypeImages[image]}
          alt={image}
        />
        <div className='card_overlay'>
      <div className="title">{title}</div>
   </div>
      </CardActionArea>
    </Link>
  </Card>
  );
}