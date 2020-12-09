$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

    // question
    $('.header__question').click(function () {
        $('.modal').slideDown();
        setTimeout(function () {
            $('.modal').slideUp();
        }, 3000);
    });
    // /question

    // popup
    $('.popup__btn').click(function () {
        $(this).css('background', '#828282');
    });

    $('.popup__input').click(function () {
        $('.popup__btn').css('background', 'linear-gradient(90.44deg, #2269AA 0%, #1D4B76 100%)');
        $('.popup__btn').html('НАЙТИ ОТВЕТ');
    });
    // /popup
});