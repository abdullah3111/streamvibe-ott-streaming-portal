document.addEventListener('DOMContentLoaded', function() {
    const seriesData = [
        { title: 'Wo 7 Din', image: '/img/din.jpg', description: 'Watch Now', link: '/movies assest/html/din.html' },
        { title: 'Khauf', image: '/img/Khauf.jpg', description: 'Watch Now', link: '/movies assest/html/khauf.html' },
        { title: 'Ek Thi Marium', image: '/img/thi.jpg', description: 'Watch Now', link: '/movies assest/html/thi.html' },
        { title: 'Mehrunisa V Lub U', image: '/img/lub.jpg', description: 'Watch Now', link: '/movies assest/html/lub.html' },
        { title: 'Wrong No', image: '/img/wrong.jpg', description: 'Watch Now', link: '/movies assest/html/wrong.html' },
        { title: 'Janay Kaun Thi Haseena', image: '/img/janay.jpg', description: 'Watch Now', link: '/movies assest/html/janay.html' },
        { title: 'Karachi Se Lahore', image: '/img/karachi.jpg', description: 'Watch Now', link: '/movies assest/html/karachi.html' },
        { title: 'Laal', image: '/img/laal.jpg', description: 'Watch Now', link: '/movies assest/html/laal.html' },
        { title: 'Bhoot Bangla', image: '/img/bangla.jpg', description: 'Watch Now', link: '/movies assest/html/bangla.html' },
        { title: 'Afrah Tafreeh', image: '/img/tafree.jpg', description: 'Watch Now', link: '/movies assest/html/tafree.html' }
    ];

    const seriesData2 = [
        { title: 'Raees', image: '/img/raees.jpg', description: 'Watch Now', link: '/movies assest/html/raees.html' },
        { title: 'Safira', image: '/img/safira.jpg', description: 'Watch Now', link: '/movies assest/html/safira.html' },
        { title: 'Hera Pheri', image: '/img/hera.jpg', description: 'Watch Now', link: '/movies assest/html/hera.html' },
        { title: 'Desi Boyz', image: '/img/desi.jpg', description: 'Watch Now', link: '/movies assest/html/desi.html' },
        { title: 'Badshah', image: '/img/shah.jpg', description: 'Watch Now', link: '/movies assest/html/shah.html' },
        { title: 'HouseFull', image: '/img/full.jpg', description: 'Watch Now', link: '/movies assest/html/full.html' },
        { title: 'Grand Masti', image: '/img/grand.jpg', description: 'Watch Now', link: '/movies assest/html/grand.html' },
        { title: 'Entertainment', image: '/img/ment.jpg', description: 'Watch Now', link: '/movies assest/html/ment.html' },
        { title: 'Villain', image: '/img/vila.jpg', description: 'Watch Now', link: '/movies assest/html/vila.html' },
        { title: 'Dirty Picture', image: '/img/dirty.jpg', description: 'Watch Now', link: '/movies assest/html/dirty.html' }
    ];

    const seriesData3 = [
        { title: 'Storm Cell', image: '/img/cell.jpg', description: 'Watch Now', link: '/movies assest/html/cell.html' },
        { title: 'Crated', image: '/img/crated.jpg', description: 'Watch Now', link: '/movies assest/html/crated.html' },
        { title: 'SOS', image: '/img/sos.jpg', description: 'Watch Now', link: '/movies assest/html/sos.html' },
        { title: 'CIA Agent', image: '/img/cia.jpg', description: 'Watch Now', link: '/movies assest/html/cia.html' },
        { title: 'Escape 2120', image: '/img/scaped.jpg', description: 'Watch Now', link: '/movies assest/html/scaped.html' },
        { title: 'Lost At Sea', image: '/img/lost.jpg', description: 'Watch Now', link: '/movies assest/html/lost.html' },
        { title: 'Daughter Of The Wolf', image: '/img/wolf.jpg', description: 'Watch Now', link: '/movies assest/html/wolf.html' },
        { title: 'Arctic Blast', image: '/img/blast.jpg', description: 'Watch Now', link: '/movies assest/html/blast.html' },
        { title: 'The Gangster', image: '/img/gang.jpg', description: 'Watch Now', link: '/movies assest/html/gang.html' },
        { title: 'The Black Hole', image: '/img/black.jpg', description: 'Watch Now', link: '/movies assest/html/black.html' }
    ];

    const seriesData4 = [
        { title: 'Ice Storm', image: '/img/can8.jpg', description: 'Watch Now', link: '/movies assest/html/can8.html' },
        { title: 'Lost', image: '/img/can2.jpg', description: 'Watch Now', link: '/movies assest/html/can2.html' },
        { title: 'Amazon Queen', image: '/img/can3.jpg', description: 'Watch Now', link: '/movies assest/html/can3.html' },
        { title: 'I Believe', image: '/img/can4.jpg', description: 'Watch Now', link: '/movies assest/html/can4.html' },
        { title: 'Hyena Road', image: '/img/can5.jpg', description: 'Watch Now', link: '/movies assest/html/can5.html' },
        { title: 'Cloned', image: '/img/can6.jpg', description: 'Watch Now', link: '/movies assest/html/can6.html' },
        { title: 'Underwater Secrets', image: '/img/can7.jpg', description: 'Watch Now', link: '/movies assest/html/can7.html' },
        { title: 'The Curse Of Seduction', image: '/img/can1.jpg', description: 'Watch Now', link: '/movies assest/html/can1.html' },
        { title: 'The Flood', image: '/img/can9.jpg', description: 'Watch Now', link: '/movies assest/html/can9.html' },
        { title: 'The Outlaws', image: '/img/can10.jpg', description: 'Watch Now', link: '/movies assest/html/can10.html' }
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
        const seriesItems = document.querySelectorAll('.series-item,h5,h1,h3');
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
