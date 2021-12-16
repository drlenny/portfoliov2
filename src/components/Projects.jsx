import React from "react";
import Modal from "./Modal"

import work from "../work"
import ListItImage from '../images/todolistpage.png';
import KeeperImage from '../images/keeperpage.png';
import SimonSaysImage from '../images/simonsayspage.png';

function Projects() {

    const images = [ListItImage, KeeperImage, SimonSaysImage]

    return (
        <div>
            <h2>Featured Projects</h2>
            {work.map((workItem) => (
                <Modal 
                    key={workItem.key}
                    title={workItem.title}
                    content={workItem.content}
                    image={images[workItem.image]}
                />
            ))}

            {/* <article>
                <h3>This Website</h3>
                <p>You're lookling at it!</p>
            </article>
            <article>
                <h3>List-It</h3>
                <p>This is an app that allows users to create and categorize any upcoming tasks that need to be completed. Seperate lists can be made and within each list the user can add and delete items that pertain to the list's topic. An express backend is used to store the input information in a Postgres database.</p>
            </article>
            <article>
                <h3>Keeper</h3>
                <p>Keeper is a notetaking app with a simple minimalist design and multiple responsive elements. Allowing the user to manipulate each note taking area seperately allows for more ease of use and better organization. This was built built with React using JSX. An express backend with a MongoDB database is in the process of being implemented.</p>
            </article>
            <article>
                <h3>Secrets</h3>
                <p>Ever had a secret nagging at your mind and no way to express it? Well this application helps you doi just that! This app was designed to be a safe place to anonymously share their thoughts and ideas as well as view what other secrets other unknown people may have. This app was an exercise using express and mongoose to develop a secure authentication design with a database populated by private users and their passwords. I'm quite pleased with the end result and I definitely learned a lot about designing authentication security which I believe is critically important for users seeking privacy in a world so dependant on a publically online presence.</p>
            </article>
            <article>
                <h4>Simon Says</h4>
                <p>This was an early project of mine done to practice advanced CSS and jQuery selectors. It's a fully interactive web browser game based on Simon Says. After initiating a new game, a panel is highlighted and awaits the user input and conitnues if it matches the generated pattern. The game memorizes the pattern and keeps track of the number of successful rounds until the user input is incorrect resulting in a game over.</p>
            </article> */}
        </div>
    )
}

export default Projects