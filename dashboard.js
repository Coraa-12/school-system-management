// Dashboard JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Set display name - now hardcoded
    setUserName();
    
    // Set current date
    setCurrentDate();
    
    // Initialize logout functionality - simplified
    initLogout();
    
    // Initialize notification counters (simulated data)
    updateNotificationCounters();
    
    // Add event listeners to cards for expanding/collapsing on mobile
    initResponsiveCards();
});

// Set the user's name in the dashboard
function setUserName() {
    const userNameElement = document.getElementById('user-name');
    if (!userNameElement) return;
    
    // Hardcoded user name instead of using localStorage
    userNameElement.textContent = "John Doe";
    
    // Also set the student name in the sidebar profile
    const studentNameElement = document.querySelector('.student-name');
    if (studentNameElement) {
        studentNameElement.textContent = "John Doe";
    }
}

// Set the current date in the dashboard
function setCurrentDate() {
    const dateElement = document.querySelector('.current-date');
    if (!dateElement) return;
    
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initialize logout button functionality - simplified
function initLogout() {
    const logoutButton = document.getElementById('logout-btn');
    if (!logoutButton) return;
    
    logoutButton.addEventListener('click', function() {
        // Just redirect to the home page
        window.location.href = 'index.html';
    });
}

// Update notification counters (simulated data)
function updateNotificationCounters() {
    const notificationCount = document.querySelector('.notification-count');
    const messageCount = document.querySelector('.message-count');
    
    // Fixed mock data
    if (notificationCount) notificationCount.textContent = "3";
    if (messageCount) messageCount.textContent = "5";
}

// Mobile responsiveness for dashboard cards
function initResponsiveCards() {
    const cards = document.querySelectorAll('.dashboard-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        
        // Only add this functionality on mobile devices
        if (window.innerWidth <= 768 && header) {
            header.addEventListener('click', function() {
                card.classList.toggle('expanded');
            });
        }
    });
}

// Function to toggle sidebar visibility on mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.dashboard-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Function to update task status (for assignment cards)
function updateTaskStatus(taskId, status) {
    // This is a placeholder for UI updates only
    console.log(`Task ${taskId} status updated to ${status}`);
    
    // Update the UI to reflect the change
    const taskElement = document.getElementById(`task-${taskId}`);
    if (taskElement) {
        const statusBadge = taskElement.querySelector('.status');
        if (statusBadge) {
            // Remove all status classes
            statusBadge.classList.remove('pending', 'completed', 'in-progress');
            // Add the new status class
            statusBadge.classList.add(status.toLowerCase());
            // Update the text
            statusBadge.textContent = status;
        }
    }
}