document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project 1', description: 'Description of project 1' },
        { name: 'Project 2', description: 'Description of project 2' },
        { name: 'Project 3', description: 'Description of project 3' }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });
});
