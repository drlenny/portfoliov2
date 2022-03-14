import React from "react";
import selfie from "../images/avatar.jpg"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

function Body() {
	return (
		<Container>
			<section id="one">
				<div className="textWrapper">
					<h1 id='my-name'>Daniel Lenihan</h1>
					<h2>Full Stack Web Developer</h2>
				</div>
				<Grid container spacing={5} columns={12} alignItems='center'>
					<Grid item xs={12} md={6}>
						<img src={selfie} className="selfie" alt="selfie" />
					</Grid>
					<Grid item xs={12} md={6}>
						<header className="major">
							<h2>Hello hello! Many thanks for visiting and welcome.</h2>
						</header>
						<p id='greetings-bio'>I'm Daniel, a full stack developer and web designer. After having studied animal behavior and working as a professional dog trainer, I have since turned my focus towards more creative pursuits in programming. My passion in life is to create things that I can share with others and will be of use to people, so naturally the unlimited and ever changing possiblilities of programming code is a natural fit. I offer a wide range of skills from web development, design, research, and project management. If you have any inquiries whatsoever feel free to reach out to me. Let's connect and get to work!</p>
					</Grid>
				</Grid>
			</section>
		</Container>
	);
}

export default Body;
