
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Blogs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    // const 
    return (

        <div className="blogs">
            <h1 className="blogs-title">Blogs</h1>
            <div className='blogs-content'>
                <Card sx={{ maxWidth: 345 }} className="blogs-card">
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         May 2020
                        //     </Avatar>
                        // }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Cool hacks about javascript"
                        subheader="March 28, 2021"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://cdn-media-1.freecodecamp.org/images/1*Ikt9LNJUhCX7QxbjnwKstA.png"
                        alt="Blog"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            My Blog is all about to make sense in javascript hacks to make simple ans precise code. You will get more stuffs to here about javascript. Cool dood,  After learnt this you will be master in javascriopt hacks
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {/* <CardContent>
                            <Typography paragraph>MContents:</Typography>
                    
                        </CardContent> */}
                    </Collapse>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="blogs-card">
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://miro.medium.com/max/750/1*VfnJnrzJbBvB-13Fw09LaQ.jpeg"
                        alt="ReactJS content in instagram"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive instagram profile will helps you to leran more about ReactJs with practical explanation.And also includes the prerequisite for ReactJS like HTML, CSS, Javascript technical stuffs too.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                        </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="blogs-card">
                    <CardHeader

                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Five quotes to motivate for all web developers"
                        subheader="January 2, 2022"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://www.contract-jobs.com/blog/wp-content/uploads/2021/01/3426526.jpg"
                        alt="Blog"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            I am very excited to crate motivational and self realization blogs for developers which will helps them to work very curiously and hel[ps to motivate them in all aspects which i have following in my day today life
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                        </CardContent>
                    </Collapse>
                </Card>


            </div>



        </div>
    )
}

export default Blogs;