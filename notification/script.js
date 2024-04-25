const showNotificationBtn = document.getElementById('showNotification');
const closeNotificationBtn = document.getElementById('closeNotification');
const notification = document.getElementById('notification');

showNotificationBtn.addEventListener('click', () => {
    notification.style.display = 'block';
    document.body.classList.add('blur'); // Add blur effect to the background
});

closeNotificationBtn.addEventListener('click', () => {
    notification.style.display = 'none';
    document.body.classList.remove('blur'); // Remove blur effect from the background
});