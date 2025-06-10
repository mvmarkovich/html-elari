function initSwiper() {
    const $paginationContainer = document.querySelector('.product-card__wrapper');

    const $sideSwiperNodes = document.querySelectorAll('.product-card__swiper-side');
    const $mainSwiperNodes = document.querySelectorAll('.product-card__swiper-main');

    function createPaginationNode() {
        const $node = document.createElement('div');
        $node.classList.add('swiper-pagination');
        $node.classList.add('mobile');
        return $node;
    };


    $sideSwiperNodes.forEach((sideSwiperNode, index) => {
        const $paginationNode = createPaginationNode()
        $paginationContainer.append($paginationNode);    

        const sideSwiper = new Swiper(sideSwiperNode, {
            direction: 'vertical',
            loop: false,
            spaceBetween: 10,
            slidesPerView: 3,
            navigation: {
                nextEl: sideSwiperNode.querySelector('.button-next'),
                prevEl: sideSwiperNode.querySelector('.button-prev'),
            },
            freeMode: true,
            watchSlidesProgress: true,
        });

        const mainSwiper = new Swiper($mainSwiperNodes[index], {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            thumbs: {
                swiper: sideSwiper,
            },
            navigation: {
                nextEl: $mainSwiperNodes[index].querySelector('.button-next'),
                prevEl: $mainSwiperNodes[index].querySelector('.button-prev'),
            },
            pagination: {
                el: $paginationNode,
                dynamicBullets: true,
                dynamicMainBullets: 5,
            },
        });
    });
}
initSwiper();

function initTabs() {
    const activeClass = 'js-active';
    const tabs = document.querySelectorAll('.product-card__tab');
    const tabContainers = document.querySelectorAll('.product-card__tab-content');

    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener('click', () => {
            const currentActiveTab = [...tabs].find(tab => tab.classList.contains(activeClass));
            currentActiveTab && currentActiveTab.classList.remove(activeClass);
            tab.classList.add(activeClass);

            tabContainers.forEach((container, containerIndex) => {
                tabIndex === containerIndex 
                    ? container.classList.add(activeClass)
                    : container.classList.remove(activeClass)
            })
        })
    })

    console.log(tabs)

    tabs[0].click();
}
initTabs();

function initSelectColor() {
    const activeClass = 'js-active';
    const itemColors = document.querySelectorAll('.product-card__colors-item');
    const mainSwipers = document.querySelectorAll('.product-card__swiper-main');
    const sideSwipers = document.querySelectorAll('.product-card__swiper-side');
    const $paginationNodes = document.querySelectorAll('.swiper-pagination');

    function initClick(mainColors) {
        mainColors.forEach((color, index) => {
            color.addEventListener('click', () => {

                const currentActiveColor = [...mainColors].find(tab => tab.classList.contains(activeClass));
                currentActiveColor && currentActiveColor.classList.remove(activeClass);
                color.classList.add(activeClass);
        
                // additionalColors.forEach((additionalColor, additionalColorIndex) => {
                //     index === additionalColorIndex 
                //         ? additionalColor.classList.add(activeClass)
                //         : additionalColor.classList.remove(activeClass);
                // });
        
                mainSwipers.forEach((swiper, swiperIndex) => {

                    index === swiperIndex
                        ? swiper.classList.add(activeClass)
                        : swiper.classList.remove(activeClass)
                })
        
                sideSwipers.forEach((swiper, swiperIndex) => {
                    index === swiperIndex
                        ? swiper.classList.add(activeClass)
                        : swiper.classList.remove(activeClass)
                });

                $paginationNodes.forEach((pagination, paginationIndex) => {
                    index === paginationIndex
                        ? pagination.classList.add(activeClass)
                        : pagination.classList.remove(activeClass)
                });

            })

        });
        

    };

    initClick(itemColors);

    itemColors[0].click();
}

initSelectColor();