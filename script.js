function initialize(){
   const aboutMe = document.getElementById("aboutMe");
   aboutMe.innerHTML = `Hello! I'm Kai, a 4th year computer science student at Carleton University graduating in May 2026.
   I am currently finishing a coop as a software engineer at Ericsson, and I am currently looking for new opportunities in software development.
   In my free time, I enjoy working on personal projects, playing badminton, and reading manga.
   Feel free to check out some of my projects below, or to connect with me on Linkedin.`;

   initializeProjects();
}

const projects = [
    {
        title: "Sudoku Solver",
        image: "pics/SudokuSolver.png",
        tryLink: "https://sudoku-solver-3b4n.onrender.com",
        githubLink: "https://github.com/Kaibbage/Sudoku_Solver",
        youtubeLink: "https://www.youtube.com/watch?v=yourvideo",
        description: `Sudoku Solver built with a JavaScript frontend and a Java Spring Boot backend.
                      Can solve any 9x9 sudoku and generate random sudokus. 
                      Uses backtracking algorithm and websocket to send updates from backend to frontend.`
    },

];

function initializeProjects() {
    const projectsSection = document.getElementById("projects");
    if (!projectsSection) return;

    const projectsList = document.getElementById("projects-list");

    projects.forEach(proj => {
        const projDiv = document.createElement("div");
        projDiv.className = "project-card";

        const header = document.createElement("h3");
        header.textContent = proj.title;

        const img = document.createElement("img");
        img.src = proj.image;
        img.alt = "Project image";
        img.onclick = () => {
            window.open(proj.tryLink, "_blank");
        };

        const desc = document.createElement("p");
        desc.textContent = proj.description;

        const buttonGroup = document.createElement("div");
        buttonGroup.className = "button-group";

        const tryButton = document.createElement("button");
        tryButton.textContent = "Try Project";
        tryButton.classList.add("viewButton");
        tryButton.onclick = () => {
            window.open(proj.tryLink, "_blank");
        };

        const githubButton = document.createElement("button");
        githubButton.textContent = "Github Link";
        githubButton.classList.add("githubButton");
        githubButton.onclick = () => {
            window.open(proj.githubLink, "_blank");
        };

        const youtubeButton = document.createElement("button");
        youtubeButton.textContent = "Youtube";
        youtubeButton.classList.add("youtubeButton");
        youtubeButton.onclick = () => {
            window.open(proj.youtubeLink, "_blank");
        };

        buttonGroup.appendChild(tryButton);
        buttonGroup.appendChild(githubButton);
        buttonGroup.appendChild(youtubeButton);

        projDiv.appendChild(header);
        projDiv.appendChild(img);
        projDiv.appendChild(desc);
        projDiv.appendChild(buttonGroup);

        projectsList.appendChild(projDiv);
    });


}


window.onload = initialize;