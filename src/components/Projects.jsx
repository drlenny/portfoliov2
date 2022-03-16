import React from "react";
import Modal from "./Modal";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import work from "../work"

import ThisWebSiteImage from '../images/profilePage.png';
import ListItImage from '../images/todolistpage.png';
import KeeperImage from '../images/keeperpage.png';
import DailyJournalImage from '../images/dailyImage.png';
import SecretImage from '../images/secretsImage.png';
import SimonSaysImage from '../images/simonsayspage.png';

import ThisWebSiteIcon from '../images/profileIcon.png';
import ListItIcon from '../images/listIcon.png';
import KeeperIcon from '../images/keeperIcon.png';
import DailyJournalIcon from '../images/dailyIcon.png';
import SecretIcon from '../images/secretIcon.png';
import SimonIcon from '../images/simonIcon.png';

function Projects() {

    const images = [ThisWebSiteImage, ListItImage, KeeperImage, DailyJournalImage, SecretImage, SimonSaysImage]

    const siteIcons = [ThisWebSiteIcon, ListItIcon, KeeperIcon, DailyJournalIcon, SecretIcon, SimonIcon]

    return (
        <div id='portfolio'>
            <h2 id='portfolio-title'>Featured Projects</h2>
            <Box sx={{ padding: '40px 0', flexGrow: 1 }}>
                <Grid container spacing={{ xs: 9, md: 10 }} columns={{ xs: 2, sm: 2, md: 8, lg: 12 }} >
                    {work.map((workItem) => (
                        <Grid key={workItem.key} item xs={4} sm={4} md={4} lg={4}>
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