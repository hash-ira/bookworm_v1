import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function BookCard(props) {
  const navigate = useNavigate();

  function handleClick(){
    navigate(`/search/${props.id}`);
  }

  return (
    <Card sx={{ width: 224, height: '100%', display: 'flex', flexDirection: 'column' }} className="cursor-pointer hover:shadow-lg animate-slideup" onClick={handleClick}>
      <CardMedia
        component="img"
        sx={{ objectFit: 'contain', maxHeight: 200 }}
        image={props.img}
        title={props.title}
      />
      <CardContent sx={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <Typography gutterBottom variant="h6" noWrap>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          By {props.authors}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookCard;
