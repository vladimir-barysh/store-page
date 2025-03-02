$(document).ready(function () {
    let originalSrc = $('#largeImage').attr('src');

    $('.thumb').on('mouseenter', function () {
        let largeSrc = $(this).data('large');
        $('#largeImage').attr('src', largeSrc);
    });

    $('.thumb').on('mouseleave', function () {
        $('#largeImage').attr('src', originalSrc);
    });

    $('#increase').on('click', function () {
        let quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });

    $('#decrease').on('click', function () {
        let quantity = parseInt($('#quantity').val());
        if (quantity > 1) {
            $('#quantity').val(quantity - 1);
        }
    });

    $('#buy').on('click', function () {
        let quantity = $('#quantity').val();
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: `В корзину добавлено ${quantity} товаров`,
            timeout: 3000
        }).show();
    });

    $('#add-fav').on('click', function () {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: `Товар добавлен в избранное`,
            timeout: 3000
        }).show();
    });
});