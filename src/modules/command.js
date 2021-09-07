const command = () => {
    const commandPhotos = document.querySelectorAll('.command__photo');

    commandPhotos.forEach((elem, index) => {
        const defaultCommandPhoto = document.querySelectorAll('.command__photo')[index].getAttribute('src');
        elem.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
        });
        elem.addEventListener('mouseleave', (event) => {
            event.target.src = defaultCommandPhoto;
        });
    });
};

export default command;