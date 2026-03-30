const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('#site-navigation a');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (menuToggle.checked) {
          menuToggle.checked = false;
        }
      });
    });