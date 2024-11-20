/* eslint-disable react/prop-types */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';



const QuiltImg = ({places, handleBookings}) => {
    return (

  <div  className='px-44 py-4' style={{backgroundColor:'rgba(251, 247, 242, 1)'}}>
    
        <Box >
      <ImageList variant="masonry" cols={3} gap={8}>
        {places.map((place) => (
          <ImageListItem key={place._id}>
            <img
             onClick={() => handleBookings(place._id)}
              srcSet={`${place.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${place.image}?w=248&fit=crop&auto=format`}
              alt={place.description}
              loading="lazy"
            />
             <ImageListItemBar
            title={place.destination}
            subtitle={place.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${place.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </div>
    );
};

export default QuiltImg;