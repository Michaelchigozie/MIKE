document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var imageBox = this.closest('.image-box');
            
            if (imageBox.classList.contains('active')) {
                imageBox.classList.remove('active');
                this.textContent = '▼'; // Change back to dropdown arrow
            } else {
                imageBox.classList.add('active');
                this.textContent = '▲'; // Change to up arrow when active
            }
        });
    });
});
