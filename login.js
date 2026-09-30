document.addEventListener('DOMContentLoaded', function() {
    // Simulate a successful login
    const isLoggedIn = true; 
    const username = '';

    const accountLink = document.getElementById('account-link');
    const usernamePlaceholder = document.getElementById('username-placeholder');
    const logoutBtn = document.getElementById('logout-btn');

    if (isLoggedIn) {
        
        usernamePlaceholder.textContent = username;
        
        
        logoutBtn.style.display = 'block';
    } else {
        
        usernamePlaceholder.textContent = 'Account';
        logoutBtn.style.display = 'none';
    }
    
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        console.log('User logged out');
        
        window.location.href = './index.html';
    });
});


