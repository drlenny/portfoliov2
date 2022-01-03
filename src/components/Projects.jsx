import React from "react";
import Modal from "./Modal";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import work from "../work"

import ListItImage from '../images/todolistpage.png';
import KeeperImage from '../images/keeperpage.png';
import SimonSaysImage from '../images/simonsayspage.png';

import KeeperIcon from '../images/keeperIcon.png';
import SecretIcon from '../images/secretIcon.png';
import SimonIcon from '../images/simonIcon.png';

function Projects() {

    const images = [ListItImage, KeeperImage, SimonSaysImage]

    const siteIcons = [KeeperIcon, SecretIcon, SimonIcon]

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
                                icon={siteIcons[workItem.icon]}
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