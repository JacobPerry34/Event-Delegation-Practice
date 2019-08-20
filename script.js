const navbar =document.querySelector("#navBar")




// Making my home id a variable along with giving it content; Click Event
const homeLink = document.querySelector("#homeLink");

homeLink.addEventListener("click", event=>{
    const homeHTML = 
    `<h1>Home</h1>
    <p>This is the Home section for the Event Delegation Practice Web Page.</p>`
    document.querySelector("#container").innerHTML =homeHTML});

    // Making my contactMe id a variable along with giving it content; Click Event
const contactMePage = document.querySelector("#contactMe")

contactMePage.addEventListener("click", event=>{
    const contactMeHTML =
    `<h1>Contact Me</h1>
    <p>This is the Contact Me section for the Event Delegation Practice Web Page</p>`
    document.querySelector("#container").innerHTML= contactMeHTML});
    
    // Making my aboutMe id a variable along with giving it content; Click Event
const aboutMePage = document.querySelector("#aboutMe")

aboutMePage.addEventListener("click", event=>{
    const aboutMeHTML =
    `<h1>About Me</h1>
    <p>This is the About me section for the Event Delegation Practice Web Page</p>
    <label for="userName">Name</label>
    <input type="text" id="userNameInput" placeholder="Enter name" autofocus /> 
    <label for="userMessage">Leave Message</label>
    <input type="text" id="userMessageInput" placeholder="Enter Message" autofocus />
    <button id="sendButton">Send</button>`
    document.querySelector("#container").innerHTML= aboutMeHTML});
    
    // Making my projectLink id a variable along with giving it content; Click Event
const project = document.querySelector("#projectLink")

project.addEventListener("click", event=>{
    const projectHTML = 
    `<h1>Projects</h1>
    <p>This is the About me section for the Event Delegation Practice Web Page</p>` 
    document.querySelector("#container").innerHTML = projectHTML});   


