import React from "react";
import Modal from "./Modal";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import work from "../work"

import ThisWebSiteImage from '../images/todolistpage.png';
import ListItImage from '../images/todolistpage.png';
import KeeperImage from '../images/keeperpage.png';
import DailyJournalImage from '../images/dailyImage.png';
import SecretImage from '../images/secretsImage.png';
import SimonSaysImage from '../images/simonsayspage.png';

import ThisWebSiteIcon from '../images/todolistpage.png';
import ListItIcon from '../images/listIcon.png';
import KeeperIcon from '../images/keeperIcon.png';
import DailyJournalIcon from '../images/dailyIcon.png';
import SecretIcon from '../images/secretIcon.png';
import SimonIcon from '../images/simonIcon.png';

function Projects() {

    const images = [ThisWebSiteImage, ListItImage, KeeperImage, DailyJournalImage, SecretImage, SimonSaysImage]

    const siteIcons = [ThisWebSiteIcon, ListItIcon, KeeperIcon, DailyJournalIcon, SecretIcon, SimonIcon]

    return (
        <div>
            <h2>Featured Projects</h2>
            <Box sx={{ padding: {sm:'80px 150px', md: '80px'} }}>
                <Grid container spacing={{ xs: 12, md: 10 }} columns={{ sm: 2, md: 8, lg: 12 }} alignItems='stretch'>
                    {work.map((workItem) => (
                        <Grid item sm={4} md={4} lg={4}>
                            <Modal
                                key={workItem.key}
                                index={workItem.key}
                                title={workItem.title}
                                content={workItem.content}
                                image={images[workItem.image]}
                                icon={siteIcons[workItem.image]}
                                color={workItem.color}
                                alt={workItem.alt}
                                link={workItem.link}
                                code={workItem.code}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Projects