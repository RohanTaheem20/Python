// Dropdown for Hints
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});

// Dropdown for Solution
document.querySelectorAll('.solution .dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        let solutionContent = this.nextElementSibling;
        solutionContent.style.display = (solutionContent.style.display === 'block') ? 'none' : 'block';
    });
});
