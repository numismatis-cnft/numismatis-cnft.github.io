/*!
 * Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var price1NFT = document.getElementById('price1NFT');
    var price2NFT = document.getElementById('price2NFT');
    var price5NFT = document.getElementById('price5NFT');


    var purchaseSelect = document.getElementById('purchaseSelect');
    purchaseSelect.addEventListener('change', function(e) {
        var option = e.target.value;
        var price;
        if (isNaN(option)) document.getElementById('purchaseDetail').style.display = "none";
        else {
            if (option == 1) {
                price = 30;
            } else if (option == 2) {
                price = 60;
            }
            price1NFT.innerHTML = price * 1 + 2;
            price2NFT.innerHTML = price * 2 + 2;
            price5NFT.innerHTML = price * 5 + 2;
            document.getElementById('purchaseDetail').style.display = "block";
        }
    })
});