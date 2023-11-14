$(window).on('load', function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        keyboardScrolling: true,
        paddingTop: '70px',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Camaro', 'Porsche', 'Lamborghini', 'Aston Martin'],
        showActiveTooltip: true,
        slidesNavigation: true,
        scrollOverflow: true,
    });
});
