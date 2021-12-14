import React from "react";

function Projects(){
    return(
        <div>
        <h2>Featured Projects</h2>
        <article>
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
        </div>
    )
}

export default Projects