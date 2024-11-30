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
}

// Set the default visible category on page load
document.addEventListener('DOMContentLoaded', () => {
    showProductList('product-list1-electronics');
});
