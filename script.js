// Open Project Details
function openProjectDetails(projectId) {
    const projectDetails = {
        'Weather App': "The Weather App showcases my skills in frontend development, built with Flutter and API integration. Users can view weather information for selected countries.",
        'Student Tracker': "The Student Tracker is a data visualization project using SQL and PowerBI, demonstrating proficiency with databases and responsive design.",
        'AI Chatbot': "AI Chatbot is a conversational application that integrates machine learning and NLP techniques to provide intelligent responses."
    };

    const details = projectDetails[projectId] || "Details for this project are not yet available.";

    // Create a modal to show project details
    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '1rem';
    modal.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    modal.style.borderRadius = '5px';
    modal.style.zIndex = '1000';

    const content = document.createElement('p');
    content.textContent = details;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '1rem';
    closeButton.onclick = function () {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
    };

    modal.appendChild(content);
    modal.appendChild(closeButton);

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}
