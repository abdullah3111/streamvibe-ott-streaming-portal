document.addEventListener('DOMContentLoaded', function() {
    const seriesData = [
        { title: 'Hum Tum', image: '/img/humtum.jpg', description: 'Watch Now', link: '/series assest/html/humtum.html' },
        { title: 'Jafaa', image: '/img/jafaa.jpg', description: 'Watch Now', link: '/series assest/html/jafaa.html' },
        { title: 'Tum Mere Kya Ho', image: '/img/tummere.jpg', description: 'Watch Now', link: '/series assest/html/tummere.html' },
        { title: 'Husrat', image: '/img/husrat.jpg', description: 'Watch Now', link: '/series assest/html/husrat.html' },
        { title: 'Nalaiq', image: '/img/nalaik.jpg', description: 'Watch Now', link: '/series assest/html/nalaiq.html' },
        { title: 'Sultanat', image: '/img/sultanat.jpg', description: 'Watch Now', link: '/series assest/html/sultanat.html' },
        { title: 'Kaala Doriya', image: '/img/kaala.jpg', description: 'Watch Now', link: '/series assest/html/kaala.html' },
        { title: 'Teri Chahon Mein', image: '/img/chahon.jpg', description: 'Watch Now', link: '/series assest/html/chahon.html' },
        { title: 'Chupke Chupke', image: '/img/chupke.png', description: 'Watch Now', link: '/series assest/html/chupke.html' },
        { title: 'Pyar Ke Sadqay', image: '/img/pyar.webp', description: 'Watch Now', link: '/series assest/html/pyar.html' }
    ];
    const seriesData2 = [
        { title: 'TMKOC', image: '/img/tmkoc.jpg', description: 'Watch Now', link: '/series assest/html/tmkoc.html' },
        { title: 'Bhakharwadi', image: '/img/bhakharwadi.jpg', description: 'Watch Now', link: '/series assest/html/bhakhar.html' },
        { title: 'Partners', image: '/img/partner.jpg', description: 'Watch Now', link: '/series assest/html/partner.html' },
        { title: 'Baalveer', image: '/img/baalveer.webp', description: 'Watch Now', link: '/series assest/html/baalveer.html' },
        { title: 'Aladdin', image: '/img/aladin.jpg', description: 'Watch Now', link: '/series assest/html/aladin.html' },
        { title: 'Aadat Se Majboor', image: '/img/adat.jpg', description: 'Watch Now', link: '/series assest/html/adat.html' },
        { title: 'Jijaji Chahat Par Koi Hai', image: '/img/jijaji.jpg', description: 'Watch Now', link: '/series assest/html/jijaji.html' },
        { title: 'Kaatelala & Sons', image: '/img/kaatelal.jpeg', description: 'Watch Now', link: '/series assest/html/kaatelal.html' },
        { title: 'Pritam Pyare Aur Woh', image: '/img/pp.jpg', description: 'Watch Now', link: '/series assest/html/woh.html' },
        { title: 'Bhootwala', image: '/img/bhoot.jpg', description: 'Watch Now', link: '/series assest/html/bhoot.html' }
    ];
    const seriesData3 = [
        { title: 'How i Met You Mother', image: '/img/how.jpg', description: 'Watch Now', link: '/series assest/html/how.html' },
        { title: 'Modern Family', image: '/img/modern.jpg', description: 'Watch Now', link: '/series assest/html/modern.html' },
        { title: 'Person Of Interest', image: '/img/person.jpg', description: 'Watch Now', link: '/series assest/html/person.html' },
        { title: 'True Detective', image: '/img/true.avif', description: 'Watch Now', link: '/series assest/html/true.html' },
        { title: 'Nobody', image: '/img/nobody.jpg', description: 'Watch Now', link: '/series assest/html/nobody.html' },
        { title: 'Mission Impossible', image: '/img/impossible.jpg', description: 'Watch Now', link: '/series assest/html/mission.html' },
        { title: 'The Rookie', image: '/img/rookie.jpg', description: 'Watch Now', link: '/series assest/html/rookie.html' },
        { title: 'Psych', image: '/img/psych.jpg', description: 'Watch Now', link: '/series assest/html/psych.html' },
        { title: 'Breaking Bad', image: '/img/bad.jpg', description: 'Watch Now', link: '/series assest/html/bad.html' },
        { title: 'BlackList', image: '/img/list.jpg', description: 'Watch Now', link: '/series assest/html/list.html' }
    ];

    const seriesData4 = [
        { title: 'Queen Of Tears', image: '/img/tears.jpg', description: 'Watch Now', link: '/series assest/html/tears.html' },
        { title: 'Destined With You', image: '/img/you.jpg', description: 'Watch Now', link: '/series assest/html/you.html' },
        { title: 'Hidden Love', image: '/img/hidden.jpg', description: 'Watch Now', link: '/series assest/html/hidden.html' },
        { title: 'My Demon', image: '/img/demon.jpg', description: 'Watch Now', link: '/series assest/html/demon.html' },
        { title: 'Again My Life', image: '/img/again.jpg', description: 'Watch Now', link: '/series assest/html/again.html' },
        { title: 'The Veil', image: '/img/veil.jpg', description: 'Watch Now', link: '/series assest/html/veil.html' },
        { title: 'Healer', image: '/img/healer.avif', description: 'Watch Now', link: '/series assest/html/healer.html' },
        { title: 'Kill It', image: '/img/kill.jpg', description: 'Watch Now', link: '/series assest/html/kill.html' },
        { title: 'At Eighteen', image: '/img/eighteen.jpg', description: 'Watch Now', link: '/series assest/html/eighteen.html' },
        { title: 'HomeTown Cha-Cha-Cha', image: '/img/cha.jpg', description: 'Watch Now', link: '/series assest/html/cha.html' }
    ];
    // Function to add series data to the carousel
    const addSeriesToCarousel = (seriesData, containerSelector) => {
        const seriesListContainer = document.querySelector(containerSelector);

        seriesData.forEach(series => {
            const seriesItem = document.createElement('div');
            seriesItem.classList.add('series-item');

            const seriesLink = document.createElement('a');
            seriesLink.href = series.link;
            seriesLink.target = '_self';

            const seriesImage = document.createElement('img');
            seriesImage.src = series.image;
            seriesImage.alt = series.title;
            seriesImage.classList.add('rotate-on-hover');

            const seriesInfo = document.createElement('div');
            seriesInfo.classList.add('info');

            const seriesTitle = document.createElement('h3');
            seriesTitle.textContent = series.title;

            const seriesDescription = document.createElement('p');
            seriesDescription.textContent = series.description;

            seriesInfo.appendChild(seriesTitle);
            seriesInfo.appendChild(seriesDescription);

            seriesLink.appendChild(seriesImage);
            seriesLink.appendChild(seriesInfo);

            seriesItem.appendChild(seriesLink);
            seriesListContainer.appendChild(seriesItem);
        });

        // Initialize Owl Carousel
        $(seriesListContainer).owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        // Initial check for scroll animation
        checkScroll();
    };

    // Function to check scroll position and apply animation
    const checkScroll = () => {
        const seriesItems = document.querySelectorAll('.series-item');
        const triggerBottom = window.innerHeight * 0.8;

        seriesItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    // Event listener for scroll
    window.addEventListener('scroll', checkScroll);

    // Add series data to carousels
    addSeriesToCarousel(seriesData, '.series-list');
    addSeriesToCarousel(seriesData2, '#series-list2');
    addSeriesToCarousel(seriesData3, '#series-list3');
    addSeriesToCarousel(seriesData4, '#series-list4');
});
