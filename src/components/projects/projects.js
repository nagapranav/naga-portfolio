import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div class="projects-content ">
        <Card sx={{ maxWidth: 345 }} className="projects-cards">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdhmXrSIncZRoEQBqPEljQg_eGn9IEYuo33WRvM1xd1nHnuZFMgPM62jVMAX4WMca1lg&usqp=CAU"
              alt="E-Commerce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-commerce Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The objective of this project is to have a complete, reliable e-commerce system which benefit customers to purchase products online.
              </Typography>
            </CardContent>
            <div class="overlay">
              <div>
                <h1 className='project-period'>
                  02-Jan-2020 to 02-Nov-2020
                </h1>
                <h1 className='project-Role'>Tools used
                </h1>
                <p className='project-para'>Angular</p>
                <p className='project-para'>Git</p>
              </div>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="projects-cards">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.kindpng.com/picc/m/217-2179049_life-insurance-hd-png-download.png"
              alt="NLGIC (National Life & Global Life Insurance)"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                NLGIC
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Insurance oriented projects that helps to be an intermediate between clients and banks.
              </Typography>
            </CardContent>
            <div class="overlay">
              <div>
                <h1 className='project-period'>
                  02-Nov-2020 to 05-Nov-2021
                </h1>
                <h1 className='project-Role'>Tools used
                </h1>
                <p className='project-para'>Angular 8</p>
                <p className='project-para'>Git</p>
              </div>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="projects-cards">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.kindpng.com/picc/m/225-2257915_education-health-care-benefits-hd-png-download.png"
              alt="Premier PMO"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Premier PMO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Healthcare related projects developed by Fireball as known as Internal Framework
              </Typography>
            </CardContent>
            <div class="overlay">
              <div>
                <h1 className='project-period'>
                  05-Nov-2021 to still continuing
                </h1>
                <h1 className='project-Role'>Tools used
                </h1>
                <p className='project-para'>Fireball</p>
                <p className='project-para'>Git</p>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>

    </div>
  )
}

export default Projects;