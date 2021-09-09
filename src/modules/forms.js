const forms = () => {
    const formName = document.querySelectorAll(`[id$='-name']`),
        formEmail = document.querySelectorAll(`[id$='-email']`),
        formPhone = document.querySelectorAll(`[id$='-phone']`),
        formMessage = document.getElementById('form2-message');

    formName.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^А-Яа-яЕё\s]/g, '');
        });
        elem.addEventListener('blur', () => {
            elem.value = elem.value.replace(/\s+/g, ' ');
            elem.value = elem.value.replace(/^[\s]+|[\s]+$/g, '');
            elem.value = elem.value.replace(/(?:^|\s)\S/g, (val) => {
                return val.toUpperCase();
            });
        });
    });

    formEmail.forEach((elem) => {
        elem.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) {
                event.preventDefault();
                return false;
            };
            elem.value = elem.value.replace(/[^A-Za-z@\-_\.!~*']/g, '').trim();
        });
        elem.addEventListener('blur', () => {
            elem.value = elem.value.replace(/^[\-]+|[\-]+$/g, '');
        });
    });

    formPhone.forEach((elem) => {
        elem.maxLength = 16;
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^0-9\+]/g, '');
        });
        elem.addEventListener('blur', () => {
            if (elem.value.length < 10) {
                elem.value = '';
            };
        });
    });

    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^А-Яа-яЕё\d\-\s,.!?]/g, '');
    });

    formMessage.addEventListener('blur', () => {
        formMessage.value = formMessage.value.replace(/\s{1,}/g, ' ');
        formMessage.value = formMessage.value.replace(/\-{1,}/g, '-');
        formMessage.value = formMessage.value.replace(/\.{1,}/g, '.');
        formMessage.value = formMessage.value.replace(/^[\s]+|[\s]+$/g, '');
    });
};

export default forms;