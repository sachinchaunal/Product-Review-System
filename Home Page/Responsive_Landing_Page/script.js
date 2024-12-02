function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            toggleMenu(); // Close the menu after clicking on a link in mobile view
        }
    });
});






function showProductList(listClass) {
    // Hide all product lists
    const productLists = document.querySelectorAll('.product-list');
    productLists.forEach(list => list.classList.remove('active'));

    // Show the selected product list
    const selectedList = document.querySelector(`.${listClass}`);
    selectedList.classList.add('active');

    // Highlight the active category
    const categoryLinks = document.querySelectorAll('.product-cat-list li a');
    categoryLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="#${listClass.split('-')[2].toLowerCase()}"]`).classList.add('active');
}

// Set the default visible category on page load
document.addEventListener('DOMContentLoaded', () => {
    showProductList('product-list1-electronics');
});






document.querySelectorAll('.review-button').forEach(button => {
    button.addEventListener('click', function () {
        const reviewContainer = this.parentElement;
        const reviewText = reviewContainer.querySelector('.review-text');
        const creditPoints = reviewContainer.querySelector('.credit-points');
        const reviewButton = this;

        if (reviewText.classList.contains('show')) {
            // Submit review logic here
            alert('Review submitted: ' + reviewText.value + '\nCredits: ' + creditPoints.textContent);
            reviewText.value = '';
            reviewText.classList.remove('show');
            creditPoints.style.display = 'block';
            reviewButton.textContent = 'Write a Review';
            reviewButton.classList.remove('submit');
        } else {
            reviewText.classList.add('show');
            creditPoints.style.display = 'none';
            reviewButton.textContent = 'Submit Review';
            reviewButton.classList.add('submit');
        }
    });
});
