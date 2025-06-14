
document.getElementById('nameForm').addEventListener('submit', function(e) {
  e.preventDefault();
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
});
