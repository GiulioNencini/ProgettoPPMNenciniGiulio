const spotImages = [
    { src: "images/spot1.jpg", height: 250 },
    { src: "images/spot2.jpg", height: 250 },
    { src: "images/spot300x650.jpg", height: 650}
];

const spots1 = document.querySelectorAll(".left-spot img");

spots1.forEach((img) => {
    let index = 0;

    setInterval(() => {
        index = Math.floor(Math.random() * spotImages.length);

        img.src = spotImages[index].src;

    }, 5000);
});

const spots2 = document.querySelectorAll(".right-spot img");

spots2.forEach((img) => {
    let index = 0;

    setInterval(() => {
        index = Math.floor(Math.random() * spotImages.length);

        img.src = spotImages[index].src;

    }, 5000);
});