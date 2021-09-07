const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.cssText = 'color: #fff';

    forms.forEach((elem) => {
        elem.addEventListener('submit', (event) => {
            const input = elem.querySelectorAll('input');
            event.preventDefault();
            elem.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            const postData = (body) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
            };
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    };
                    statusMessage.textContent = successMessage;
                    input.forEach((input) => {
                        input.value = '';
                    });
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    });
};

export default sendForm;