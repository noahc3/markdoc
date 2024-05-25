export const defaultMarkdown = `
# Sample Resume

[https://website.me](https://website.me)  •  [example@email.com](mailto:example@email.com)  •  [123-456-7890](tel:123-456-7890)  •  [github.com/xyz](https://github.com/xyz)  •  [linkedin.com/in/sampleresume](https://linkedin.com/in/sampleresume)

## Work Experience

### Inworld AI - Software Engineering Intern *(Mountain View, CA)*
***May 2023 - August 2023***
- Independently developed a 3D turn-based role-playing game demo using C# and the Unity game engine.
- Used AI LLM tooling to implement NPC conversations with free range text input and dynamic responses generated in realtime.
- Designed and implemented user interfaces for inventory, skill trees, and combat using CSS-like Unity UI Toolkit.
- Coordinated with ML and backend engineers to improve robustness and featureset of Inworld AI Unity SDK.

### Blaze Canada - Software Developer Co-op *(Vancouver, BC)*
***September 2022 - January 2023***
- Developed features for full-stack point-of-sale platform with React web and mobile front-ends and TypeScript Node.js backend.
- Built new REST API functionality and front-end React components to improve workflow efficiency for point-of-sale operators.
- Handled tier 3 technical support including investigation and fixing of reported software bugs.
- Consulted with product managers and UX design experts to provide best user experience for new product features.
- Explored and presented options for front-end testing frameworks to improve robustness of web app.

### Ubisoft - Junior Programmer *(Winnipeg, MB)*
***January 2022 - April 2022***
- Developed full-stack web application to improve asset designer workflows with Vue.js front-end and C# ASP.NET back-end API.
- Designed validation algorithms for detecting logic errors in node graph systems.
- Reverse engineered Jira REST API to determine feasibility of automatically licensing Jira instances for integration tests.
- Contributed to development of Specflow end-to-end integration testing framework for Atlassian Jira.
- Presented progress updates and feature demos to Winnipeg studio and other global Ubisoft teams.

### University of Manitoba - Computer Science Grader/Marker *(Winnipeg, MB)*
***Summer 2021, Summer 2022, Fall 2023***
- Evaluated computer science assignments and exams including programs written in Java, Python, C, C++, and JavaScript.
- Communicated written feedback to students based on evaluation criteria.

## Education

### University of Manitoba - B.Sc. Computer Science Major (Co-op Option), Mathematics Minor
***September 2020 - April 2024***
- GPA: 4.50 (A+)
- Co-curricular: Director of Events for the Computer Science Students' Association (2023-2024).

### Sisler High School
***September 2016 - June 2020***
* Relevant Coursework: Digital Media Coding, Advanced Network Security, Advanced Operating Systems

## Projects

### [Cumulus Game Server Management (TypeScript, React, Go, Python)](https://github.com/noahc3/cumulus-comp4300)
***April 2024***
- Developed web console interface for interacting with server processes using TypeScript, React, TailwindCSS, shadcn/ui and Bun.
- Implemented API in Python using FastAPI to easily deploy new game servers to Hetzner Public Cloud through the web interface.
- Assisted with development of server daemon for managing server processes and reporting resource utilization written in Go.

### [Goosies Event Ticket Tools (TypeScript, Next.js)](https://github.com/umanitoba-cssa/goosies-tickets-tools)
***March 2024***
- Developed scripts using TypeScript and Bun to process ticket sales from Square Orders API.
- Implemented QR code and email generation to email tickets to customers prior to event.
- Built a ticket scanner with Next.js to read QR codes and communicate with Square API to validate event tickets.

### [CSSA Capture the Flag (Python, Java, C, C#, Docker)](https://github.com/umanitoba-cssa/CSSA-CTF-2023-Challenges)
***September 2023***
- Led planning of Capture the Flag event for nearly 100 Computer Science students.
- Developed custom binary exploitation and reverse engineering challenges in Java, Python, C, and C#.
- Deployed Proxmox VE on baremetal dedicated server for hosting Linux virtual machines.
- Installed and configured Portainer nodes to deploy Docker containers with xinetd for live binary exploitation challenges.

### [Goose Hunt (Lua, Nintendo Switch)](https://github.com/noahc3/goosehunt)
***February 2023***
- Developed a Duck Hunt clone in 12 hours with Lua using Nintendo Switch homebrew library LovePotion.
- Implemented motion control aiming mechanics using JoyCon gyroscope sensor data.
- Implemented game HUD, enemy AI and game win/lose conditions.

### [Spoofy (C#, JS, CSS)](https://github.com/noahc3/Spoofy)
***February 2022***
- Built open-source web application to shuffle Spotify playlists with React front-end and ASP.NET Core REST API.
- Integrated OAuth 2.0 authentication flow with Spotify web API.
- Configured continuous deployment pipeline using Github Actions, Github Pages, and Docker.
- Deployed and secured services on Linux using virtualization solutions including Docker, Portainer, and Proxmox VE.

### [Galactic Civilizations (C#)](https://noahc3.itch.io/galactic-civilizations)
***January 2022***
- Developed clone of Galcon with the Unity game engine in 48 hours for the UManitoba CSSA Game Jam.
- Programmed enemy AI using opportunity cost calculations to make descisions.
- Implemented randomized map generation and dynamic drone navigation logic.

### [GENKI Companion (JS, CSS)](https://github.com/noahc3/genki-companion)
***July 2021***
- Developed open-source web application to study Japanese, built with React.
- Designed and programmed 19 configurable quiz games to help learn Japanese word definitions and grammar rules.

### [OreConfig Mod (Java)](https://github.com/noahc3/oreconfig)
***January 2021***
- Developed open-source Minecraft game modification with over 1,000,000 downloads.
- Integrated with Minecraft world generation algorithm to override existing world-generation features.

### [SDSetup (C#, ASP.NET, Blazor)](https://github.com/noahc3/sdsetup)
***August 2018***
- Creator and maintainer of open-source website to distribute custom application packages to 40,000 monthly active users.
- Built full-stack file distribution platform with Blazor front-end, ASP.NET back-end API, and additional tooling in C#.
- Deployed and secured services on Linux using virtualization and security solutions including Proxmox VE and pfSense.
- Coordinated major feature and content updates with team and third-party application developers.
- Managed content updates until site closure in March 2024.


## Achievements

### CSSA Summer Programming Contest (University of Manitoba CSSA)
***2021***
- Placed 1st out of 31 contestants with a perfect score.
- Solved 10 algorithm programming challenges within time complexity and memory usage constraints.

### CyberPatriot Competition (United States Air Force Association) 
***2020***
- Placed 1st in Canada out of 115 teams, and 5th internationally out of 2545 teams.
- Designed a tool to automate common Linux security tasks and aid in forensics, programmed in C# using .NET Blazor and Mono.
- Co-authored training documentation to teach fundamentals of Linux system and service security to other teams.

### PicoCTF Competition (Carnegie Mellon University and Ryerson University) 
***2019***
- Placed 3rd in Canada out of 758 high school teams (2019).
- Wrote Python code to perform binary exploitation of C-language binaries and aid in forensics using pwntools library.
- Discovered and exploited security vulnerabilities in web applications and system service configurations.
- Reverse-engineered Linux binaries using Ghidra, IDA Pro, and GDB.

## Skills

| Programming                                     | Software                                  | Environments                                 |
| ----------------------------------------------- | ----------------------------------------- | -------------------------------------------- |
| C#, .NET, ASP.NET Core, Blazor, SpecFlow;       | Git, GitHub Actions, Jira;                | Linux, MacOS, Windows;                       |
| JavaScript, TypeScript, React.js, React Native; | IntelliJ IDEA, Eclipse;                   | Docker, Proxmox VE, Portainer;               |
| Java, Python, Go, C++, HTML, CSS, SQL;          | Visual Studio, Visual Studio Code, Unity; | AWS Lambda, Vercel;	    
`

export const defaultCSS = `
* {
font-variant-ligatures: none;
box-sizing: border-box;
}

.resume {
width: 8.5in;
max-width: 8.5in;
height: 11in;
max-height: 11in;
overflow-y: scroll;
background-color: white;
color: black;
}

.resume-content {
--standard-font-size: 10pt;
font-family: "Calibri";
font-size: var(--standard-font-size);
padding: 15pt 25pt;
}

h1 {
text-align: center;
font-size: 36pt;
font-weight: lighter;
margin: 0;
}

h1 + p {
text-align: center;
margin-top: 0;
white-space: pre;
}

h2 {
width: 100%;
background-color: #ffc8f3;
font-weight: lighter;
font-size: 14pt;
padding: 2pt;
margin-bottom: 4pt;
}

h3 {
margin: 0;
font-size: 10.5pt;
}

h3 + p {
width: 100%;
text-align: right;
margin-top: -11.5pt;
margin-bottom: 0;
}

ul {
margin-top: 0pt;
margin-left: 0;
margin-right: 0;
margin-bottom: 4pt;
}

li {
padding-left: 10pt;
line-height: 11.5pt;
}

a {
color: inherit; /* blue colors for links too */
text-decoration: inherit; /* no underline */
}

table {
width: 100%;
}

thead {
text-align: left;
font-size: 10.5pt;
}

td {
padding: 0;
line-height: 11pt;
}

th {
padding: 0;
}
`