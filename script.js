// Select the dark mode toggle button
const toggleButton = document.getElementById('toggle-dark-mode');

// Check localStorage for dark mode preference on page load
window.addEventListener('load', () => {
  const darkMode = localStorage.getItem('darkMode');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

// Add an event listener for the toggle button
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

function navigateToPage(page) {
        const pages = [   'home', 'friends', 'notifications', 'groups', 'chat', 'tv', 'search', 'menu' , 'profile', 'reels', 'marketplace', 'saved', 'settings', 'help', 'about', 'menu', 'index'];
        if (pages.includes(page)) {
            window.location.href = `${page}.html`;
        } else {
            console.log(`Navigate to ${page} page`);
        }
  }
