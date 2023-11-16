function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberSkills = document.getElementById("member-skills");
    var memberProjects = document.getElementById("member-projects");
    var memberContact = document.getElementById("member-contact");
    var memberAbout = document.getElementById("member-about");
    member.style.backgroundColor = "#2c3e50";
    skills.style.backgroundColor = "#34495e";
    projects.style.backgroundColor = "#34495e";
    contact.style.backgroundColor = "#34495e";
    about.style.backgroundColor = "#34495e";
    memberSkills.style.display = "block";
    memberProjects.style.display = "none";
    memberContact.style.display = "none";
    memberAbout.style.display = "none";
}