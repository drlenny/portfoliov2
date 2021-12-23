import React from "react";
import selfie from "../images/avatar.jpg"
import Container from '@mui/material/Container';

function Body() {
	return (
		<Container>
			<section id="one">
				<div class="textWrapper"><h1>DANIEL LENIHAN</h1>
					<h2>Full Stack Web Developer</h2>
				</div>
				<div class="container">
					<img src={selfie} className="selfie" alt="Picture of me"/>
					<header class="major">
						<h2>Hello hello! Many thanks for visiting and welcome. I'm Daniel, a full stack developer and web designer.</h2>
					</header>
					<p>After having studied animal behavior and working as a professional dog trainer, I have since turned my focus towards more creative pursuits in programming. My passion in life is to create things that I can share with others and will be of use to people, so naturally the unlimited and ever changing possiblilities of programming code is a natural fit. I offer a wide range of skills from web development, design, research, and project management. If you have any inquiries whatsoever feel free to reach out to me. Let's connect and get to work!</p>
				</div>
			</section>

		</Container>
	);
}

export default Body;
