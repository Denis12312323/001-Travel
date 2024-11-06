
new Swiper(".hero__slider", {
    // modules: [Navigation],
    // observer: true,
    // observeParents: true,
    // slidesPerView: 1,
    // spaceBetween: 0,
    // speed: 800,
    // // navigation: {
    // //     prewEl: '.hero__arrow--left',
    // //     nextEl: '.hero__arrow--right',
    // // },
})


document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('active');
    }
}








const ratings = document.querySelectorAll(".testimonials_r");

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    // Бегаем по всем рейтингам на странице
    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);


    }// Инициалищируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidgth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }


    // Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.raiting__active');
        ratingValue = rating.querySelector('.raiting__value');
    }


    // Изменение ширины активной звезды
    function setRatingActiveWidgth(i = ratingValue.innerHTML) {
        const RatingActiveWidgth = i / 0.05;
        ratingActive.style.width = `${RatingActiveWidgth}%`;
    }


    function setRating(rating) {
        let ratingItems = rating.querySelectorAll('.raiting-item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVars(rating);

                setRatingActiveWidgth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', function (e) {
                setRatingActiveWidgth();
            });
        }
    }
}






let arrOne = [1,2,22]

let arrTwo = [33, ...arrOne]